const tools = require('core/tools');
const systemHandler = require('core/systemHandler');

class Entity {
  constructor() {
    this.id = tools.UUID();
    this.components = [];
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get(component) {
    return this.components[component];
  }

  add(component, options) {
    let Component = require("../components/" + component);

    if (typeof(Component) === 'function') {
      this.components[component] = new Component(options);
    } else {
      this.components[component] = Component;
    }
  }

  contain(component) {
    return typeof(this.components[component]) !== "undefined";
  }

  remove(component) {
    delete this.components[component];
    systemHandler.registerFromObject(this);
  }

  delete() {
    systemHandler.remove(this);
  }
}

module.exports = Entity;
