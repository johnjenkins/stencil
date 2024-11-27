import { BUILD } from '@app-data';
import { supportsShadow } from '@platform';

import type * as d from '../declarations';
import { insertBefore, updateFallbackSlotVisibility } from './vdom/vdom-render';

export const patchPseudoShadowDom = (hostElementPrototype: HTMLElement) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};

const stencilPrivates = [
  's-id',
  's-cr',
  's-lr',
  's-rc',
  's-sc',
  's-p',
  's-cn',
  's-sr',
  's-sn',
  's-hn',
  's-ol',
  's-nr',
  's-si',
  's-rf',
  's-scs',
];

export const patchCloneNode = (HostElementPrototype: HTMLElement) => {
  const orgCloneNode = HostElementPrototype.cloneNode;

  HostElementPrototype.cloneNode = function (deep?: boolean) {
    const srcNode = this;
    const isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false) as Node;
    if (BUILD.slot && !isShadowDom && deep) {
      let i = 0;
      let slotted, nonStencilNode;
      const childNodes = (this as any).__childNodes || this.childNodes;

      for (; i < childNodes.length; i++) {
        slotted = (childNodes[i] as any)['s-nr'];
        nonStencilNode = stencilPrivates.every((privateField) => !(childNodes[i] as any)[privateField]);
        if (slotted) {
          if (BUILD.appendChildSlotFix && (clonedNode as any).__appendChild) {
            (clonedNode as any).__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild((childNodes[i] as any).cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

/**
 * Patches the `appendChild` method on a `scoped` Stencil component.
 * The patch will attempt to find a slot with the same name as the node being appended
 * and insert it into the slot reference if found. Otherwise, it falls-back to the original
 * `appendChild` method.
 *
 * @param HostElementPrototype The Stencil component to be patched
 */
export const patchSlotAppendChild = (HostElementPrototype: any) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function (this: d.RenderNode, newChild: d.RenderNode) {
    const slotName = (newChild['s-sn'] = getSlotName(newChild));
    const slotNode = getHostSlotNode((this as any).__childNodes || this.childNodes, slotName, this.tagName);
    if (slotNode) {
      addSlotRelocateNode(newChild, slotNode);

      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);

      // Check if there is fallback content that should be hidden
      updateFallbackSlotVisibility(this);

      return insertedNode;
    }
    return (this as any).__appendChild(newChild);
  };
};

/**
 * Patches the `removeChild` method on a `scoped` Stencil component.
 * This patch attempts to remove the specified node from a slot reference
 * if the slot exists. Otherwise, it falls-back to the original `removeChild` method.
 *
 * @param ElementPrototype The Stencil component to be patched
 */
const patchSlotRemoveChild = (ElementPrototype: any) => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;

  ElementPrototype.removeChild = function (this: d.RenderNode, toRemove: d.RenderNode) {
    if (toRemove && typeof toRemove['s-sn'] !== 'undefined') {
      const childNodes = (this as any).__childNodes || this.childNodes;
      const slotNode = getHostSlotNode(childNodes, toRemove['s-sn'], this.tagName);
      if (slotNode && toRemove.isConnected) {
        toRemove.remove();
        // Check if there is fallback content that should be displayed if that
        // was the last node in the slot
        updateFallbackSlotVisibility(this);
        return;
      }
    }
    return (this as any).__removeChild(toRemove);
  };
};

/**
 * Patches the `prepend` method for a slotted node inside a scoped component.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
export const patchSlotPrepend = (HostElementPrototype: HTMLElement) => {
  (HostElementPrototype as any).__prepend = HostElementPrototype.prepend;

  HostElementPrototype.prepend = function (this: d.HostElement, ...newChildren: (d.RenderNode | string)[]) {
    newChildren.forEach((newChild: d.RenderNode | string) => {
      if (typeof newChild === 'string') {
        newChild = this.ownerDocument.createTextNode(newChild) as unknown as d.RenderNode;
      }
      const slotName = (newChild['s-sn'] = getSlotName(newChild));
      const childNodes = (this as any).__childNodes || this.childNodes;
      const slotNode = getHostSlotNode(childNodes, slotName, this.tagName);
      if (slotNode) {
        addSlotRelocateNode(newChild, slotNode, true);
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      }

      if (newChild.nodeType === 1 && !!newChild.getAttribute('slot')) {
        newChild.hidden = true;
      }

      return (HostElementPrototype as any).__prepend(newChild);
    });
  };
};

/**
 * Patches the `append` method for a slotted node inside a scoped component. The patched method uses
 * `appendChild` under-the-hood while creating text nodes for any new children that passed as bare strings.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
export const patchSlotAppend = (HostElementPrototype: HTMLElement) => {
  (HostElementPrototype as any).__append = HostElementPrototype.append;
  HostElementPrototype.append = function (this: d.HostElement, ...newChildren: (d.RenderNode | string)[]) {
    newChildren.forEach((newChild: d.RenderNode | string) => {
      if (typeof newChild === 'string') {
        newChild = this.ownerDocument.createTextNode(newChild) as unknown as d.RenderNode;
      }
      this.appendChild(newChild);
    });
  };
};

/**
 * Patches the `insertAdjacentHTML` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
export const patchSlotInsertAdjacentHTML = (HostElementPrototype: HTMLElement) => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;

  HostElementPrototype.insertAdjacentHTML = function (this: d.HostElement, position: InsertPosition, text: string) {
    if (position !== 'afterbegin' && position !== 'beforeend') {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement('_');
    let node: d.RenderNode;
    container.innerHTML = text;

    if (position === 'afterbegin') {
      while ((node = container.firstChild as d.RenderNode)) {
        this.prepend(node);
      }
    } else if (position === 'beforeend') {
      while ((node = container.firstChild as d.RenderNode)) {
        this.append(node);
      }
    }
  };
};

/**
 * Patches the `insertAdjacentText` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the text node
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
export const patchSlotInsertAdjacentText = (HostElementPrototype: HTMLElement) => {
  HostElementPrototype.insertAdjacentText = function (this: d.HostElement, position: InsertPosition, text: string) {
    this.insertAdjacentHTML(position, text);
  };
};

/**
 * Patches the `insertAdjacentElement` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
export const patchSlotInsertAdjacentElement = (HostElementPrototype: HTMLElement) => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;

  HostElementPrototype.insertAdjacentElement = function (
    this: d.HostElement,
    position: InsertPosition,
    element: d.RenderNode,
  ): Element {
    if (position !== 'afterbegin' && position !== 'beforeend') {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === 'afterbegin') {
      this.prepend(element);
      return element;
    } else if (position === 'beforeend') {
      this.append(element);
      return element;
    }
    return element;
  };
};

/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 */
export const patchTextContent = (hostElementPrototype: HTMLElement): void => {
  let descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');

  if (!descriptor) {
    // for mock-doc
    descriptor = Object.getOwnPropertyDescriptor(hostElementPrototype, 'textContent');
  }

  if (descriptor) Object.defineProperty(hostElementPrototype, '__textContent', descriptor);

  Object.defineProperty(hostElementPrototype, 'textContent', {
    get: function () {
      let text = '';
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach((node: d.RenderNode) => (text += node.textContent || ''));
      return text;
    },
    set: function (value) {
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach((node: d.RenderNode) => {
        if (node['s-ol']) node['s-ol'].remove();
        node.remove();
      });
      this.insertAdjacentHTML('beforeend', value);
    },
  });
};

export const patchChildSlotNodes = (elm: HTMLElement) => {
  class FakeNodeList extends Array {
    item(n: number) {
      return this[n];
    }
  }

  let childNodesFn = Object.getOwnPropertyDescriptor(Node.prototype, 'childNodes');
  if (!childNodesFn) {
    // for mock-doc
    childNodesFn = Object.getOwnPropertyDescriptor(elm, 'childNodes');
  }

  if (childNodesFn) Object.defineProperty(elm, '__childNodes', childNodesFn);

  Object.defineProperty(elm, 'children', {
    get() {
      return this.childNodes.filter((n: any) => n.nodeType === 1);
    },
  });

  Object.defineProperty(elm, 'firstChild', {
    get() {
      return this.childNodes[0];
    },
  });

  Object.defineProperty(elm, 'lastChild', {
    get() {
      return this.childNodes[this.childNodes.length - 1];
    },
  });


  Object.defineProperty(elm, 'childElementCount', {
    get() {
      return this.children.length;
    },
  });

  if (!childNodesFn) return;

  Object.defineProperty(elm, 'childNodes', {
    get() {
      const result = new FakeNodeList();
      const nodes = getSlottedChildNodes(this.__childNodes);
      result.push(...nodes);
      return result;
    },
  });
};

/// Slotted Node Patches /// 

/**
* Patches sibling accessors of a 'slotted' node within a non-shadow component.
 * Meaning whilst stepping through a non-shadow element's nodes, only the mock 'lightDOM' nodes are returned.
 * Especially relevant when rendering components via SSR... Frameworks will often try to reconcile their 
 * VDOM with the real DOM by stepping through nodes with 'nextSibling' et al.
 * - `nextSibling`
 * - `nextSiblingElement`
 * - `previousSibling`
 * - `previousSiblingElement`
 * @param NodePrototype the slotted node to be patched
 */
export const patchNextPrev = (node: any) => {
  if (!node || (node as any).__nextSibling || !globalThis.Node) return;

  patchNextSibling(node);
  patchPreviousSibling(node);
  patchNextElementSibling(node);
  patchPreviousElementSibling(node);
};

/**
 * Patches the `nextSibling` accessor of a non-shadow slotted node
 * @param node the slotted node to be patched
 * Required during during testing / mock environnement.
 */
const patchNextSibling = (node: Node) => {
  // already been patched? return
  if (!node || (node as any).__nextSibling) return;

  let descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'nextSibling');
  if (!descriptor) {
    // for mock-doc
    descriptor = Object.getOwnPropertyDescriptor(node, 'nextSibling');
  }
  if (descriptor) Object.defineProperty(node, '__nextSibling', descriptor);

  Object.defineProperty(node, 'nextSibling', {
    get: function () {
      const parentNodes = this['s-ol']?.parentNode.childNodes;
      const index = parentNodes?.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index + 1];
      }
      return this.__nextSibling;
    },
  });
};

/**
 * Patches the `nextElementSibling` accessor of a non-shadow slotted node
 * @param element the slotted element to be patched
 * Required during during testing / mock environnement.
 */
const patchNextElementSibling = (element: HTMLElement) => {
  if (!element || (element as any).__nextElementSibling || !element.nextElementSibling) return;

  let descriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'nextElementSibling');

  if (!descriptor) {
    // for mock-doc
    descriptor = Object.getOwnPropertyDescriptor(element, 'nextElementSibling');
  }
  if (descriptor) Object.defineProperty(element, '__nextElementSibling', descriptor);

  Object.defineProperty(element, 'nextElementSibling', {
    get: function () {
      const parentEles = this['s-ol']?.parentNode.children;
      const index = parentEles?.indexOf(this);
      if (parentEles && index > -1) {
        return parentEles[index + 1];
      }
      return this.__nextElementSibling;
    },
  });
};

/**
 * Patches the `previousSibling` accessor of a non-shadow slotted node
 * @param element the slotted node to be patched
 * Required during during testing / mock environnement.
 */
const patchPreviousSibling = (node: Node) => {
  if (!node || (node as any).__previousSibling) return;

  let descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'previousSibling');

  if (!descriptor) {
    // for mock-doc
    descriptor = Object.getOwnPropertyDescriptor(node, 'previousSibling');
  }
  if (descriptor) Object.defineProperty(node, '__previousSibling', descriptor);

  Object.defineProperty(node, 'previousSibling', {
    get: function () {
      const parentNodes = this['s-ol']?.parentNode.childNodes;
      const index = parentNodes?.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousSibling;
    },
  });
};

/// UTILS ///

/**
 * Creates an empty text node to act as a forwarding address to a slotted node:
 * 1) When non-shadow components re-render, they need a place to temporarily put 'lightDOM' elements.
 * 2) Patched dom methods and accessors use this node to calculate what 'lightDOM' nodes are in the host.
 * @param newChild a node that's going to be added to the component
 * @param slotNode the slot node that the node will be added to
 * @param prepend move the slotted location node to the beginning of the host
 *  (the order of the slot location nodes determines the order of the slotted nodes in our patched accessors)
 */
export const addSlotRelocateNode = (newChild: d.RenderNode, slotNode: d.RenderNode, prepend?: boolean) => {
  let slottedNodeLocation: d.RenderNode;
  // does newChild already have a slot location node?
  if (newChild['s-ol'] && newChild['s-ol'].isConnected) {
    slottedNodeLocation = newChild['s-ol'];
  } else {
    slottedNodeLocation = document.createTextNode('') as any;
    slottedNodeLocation['s-nr'] = newChild;
  }

  const parent = slotNode['s-cr'].parentNode as any;
  const appendMethod = prepend ? parent.__prepend : parent.__appendChild;

  newChild['s-ol'] = slottedNodeLocation;
  newChild['s-sh'] = slotNode['s-hn'];

  appendMethod.call(parent, slottedNodeLocation);
};

/**
 * Patches the `previousElementSibling` accessor of a non-shadow slotted node
 * @param ElementPrototype the slotted node to be patched
 * @param DescriptorNodePrototype optional. Where to find the OG descriptor for `previousElementSibling`.
 * Required during during testing / mock environnement.
 */
const patchPreviousElementSibling = (element: HTMLElement) => {
  if (!element || (element as any).__previousElementSibling || !element.previousElementSibling)
    return;

  let descriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'previousElementSibling');

  if (!descriptor) {
    // for mock-doc
    descriptor = Object.getOwnPropertyDescriptor(element, 'previousElementSibling');
  }
  if (descriptor) Object.defineProperty(element, '__previousElementSibling', descriptor);

  Object.defineProperty(element, 'previousElementSibling', {
    get: function () {
      const parentNodes = this['s-ol']?.parentNode.children;
      const index = parentNodes?.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousElementSibling;
    },
  });
};

/**
 * Get's the child nodes of a component that are actually slotted.
 * This is only required until all patches are unified
 * either under 'experimentalSlotFixes' or on by default
 * @param childNodes all 'internal' child nodes of the component
 * @returns An array of slotted reference nodes.
 */
const getSlottedChildNodes = (childNodes: NodeListOf<d.RenderNode>) => {
  const result = [];
  for (let i = 0; i < childNodes.length; i++) {
    const slottedNode = childNodes[i]['s-nr'];
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};

const getSlotName = (node: d.RenderNode) =>
  node['s-sn'] || (node.nodeType === 1 && (node as Element).getAttribute('slot')) || '';

/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @param hostName the host name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes: NodeListOf<ChildNode>, slotName: string, hostName: string) => {
  let i = 0;
  let childNode: d.RenderNode;

  for (; i < childNodes.length; i++) {
    childNode = childNodes[i] as any;
    if (childNode['s-sr'] && childNode['s-sn'] === slotName && childNode['s-hn'] === hostName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName, hostName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};

const getHostSlotChildNodes = (n: d.RenderNode, slotName: string) => {
  const childNodes: d.RenderNode[] = [n];
  while ((n = n.nextSibling as any) && (n as d.RenderNode)['s-sn'] === slotName) {
    childNodes.push(n as any);
  }
  return childNodes;
};
