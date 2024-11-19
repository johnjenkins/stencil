'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8958464.js');

const AttributeHost = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.attrsAdded = false;
  }
  testClick() {
    this.attrsAdded = !this.attrsAdded;
  }
  render() {
    const propsToRender = {};
    if (this.attrsAdded) {
      propsToRender.color = 'lime';
      propsToRender.content = 'attributes added';
      propsToRender.padding = true;
      propsToRender.margin = '';
      propsToRender.bold = 'true';
      propsToRender['no-attr'] = null;
    }
    else {
      propsToRender.content = 'attributes removed';
      propsToRender.padding = false;
      propsToRender.bold = 'false';
      propsToRender['no-attr'] = null;
    }
    return [
      index.h("button", { onClick: this.testClick.bind(this) }, this.attrsAdded ? 'Remove' : 'Add', " Attributes"),
      index.h("section", Object.assign({}, propsToRender, { style: {
          'border-color': this.attrsAdded ? 'black' : '',
          display: this.attrsAdded ? 'block' : 'inline-block',
          fontSize: this.attrsAdded ? '24px' : '',
          '--css-var': this.attrsAdded ? '12' : '',
        } })),
    ];
  }
};
AttributeHost.style = "[color=lime] {\n      background: lime;\n    }\n    section::before {\n      content: attr(content);\n    }\n    [padding=true] {\n      padding: 50px;\n    }\n    [margin] {\n      margin: 50px;\n    }\n    [bold=true] {\n      font-weight: bold;\n    }";

exports.attribute_host = AttributeHost;
