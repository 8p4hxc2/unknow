class SystemHandler {
  constructor() {
    this.systems = [];
  }

  add(system) {
    this.systems[system] = require("systems/" + system);
  }

  register(name, options) {
    let entity = new(require("entities/" + name))(options);

    this.registerFromObject(entity);
  }

  registerFromObject(entity) {
    for (let system in this.systems) {
      this.systems[system].register(entity);
    }
  }

  remove(entity) {
    for (let system in this.systems) {
      this.systems[system].remove(entity);
    }
  }

  run() {
    for (let system in this.systems) {
      this.systems[system].run();
    }
  }

  get(system) {
    return this.systems[system];
  }
}

module.exports = new SystemHandler();
