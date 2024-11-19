import { r as registerInstance, h } from "./index-a2c0d171.js";

var ParentReflectNanAttribute = /** @class */ function() {
  function ParentReflectNanAttribute(t) {
    registerInstance(this, t), 
    // counter to proxy the number of times a render has occurred, since we don't have access to those dev tools during
    // karma tests
    this.renderCount = 0;
  }
  return ParentReflectNanAttribute.prototype.render = function() {
    return this.renderCount += 1, h("div", null, h("div", null, "parent-reflect-nan-attribute Render Count: ", this.renderCount), h("child-reflect-nan-attribute", {
      val: "I am not a number!!"
    }));
  }, ParentReflectNanAttribute.prototype.componentDidUpdate = function() {
    // we don't expect the component to update, this will increment the render count in case it does (and should fail
    // the test)
    this.renderCount += 1;
  }, ParentReflectNanAttribute;
}();

export { ParentReflectNanAttribute as parent_reflect_nan_attribute };