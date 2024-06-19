/* eslint-disable @typescript-eslint/no-var-requires */
const _module = require("./.plop/module.js");
const _component = require("./.plop/component.js");
module.exports = (plop) => {
  plop.setGenerator("module", _module);
  plop.setGenerator("component", _component);
};
