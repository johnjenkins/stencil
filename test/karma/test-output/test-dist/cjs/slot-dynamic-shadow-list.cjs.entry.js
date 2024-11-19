'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8958464.js');

const DynamicListShadowComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.items = [];
  }
  render() {
    return (index.h("slot-light-list", null, this.items.map((item) => (index.h("div", null, item)))));
  }
};

exports.slot_dynamic_shadow_list = DynamicListShadowComponent;
