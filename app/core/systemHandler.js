class SystemHandler {
  constructor() {
    this.systems = [];
  }

  add(system) {
    this.systems[system] = require("systems/" + system);
  }

  register(entity) {
    for (let system in this.systems) {
      this.systems[system].register(entity);
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
