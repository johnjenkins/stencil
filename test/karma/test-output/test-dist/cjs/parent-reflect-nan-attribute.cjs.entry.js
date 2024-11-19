'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8958464.js');

const ParentReflectNanAttribute = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // counter to proxy the number of times a render has occurred, since we don't have access to those dev tools during
    // karma tests
    this.renderCount = 0;
  }
  render() {
    this.renderCount += 1;
    return (index.h("div", null, index.h("div", null, "parent-reflect-nan-attribute Render Count: ", this.renderCount), index.h("child-reflect-nan-attribute", { val: 'I am not a number!!' })));
  }
  componentDidUpdate() {
    // we don't expect the component to update, this will increment the render count in case it does (and should fail
    // the test)
    this.renderCount += 1;
  }
};

exports.parent_reflect_nan_attribute = ParentReflectNanAttribute;
