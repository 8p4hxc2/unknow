class System {
  constructor(blueprint) {
    this.blueprint = blueprint;
    this.entities = [];
  }

  register(entity) {
    let match = 0;
    let total = 0;

    for (let component in this.blueprint) {
      total++;
      if (entity.contain(component) && this.blueprint[component] === true || this.blueprint[component] === false && !entity.contain(component)) {
        match++;
      }
    }

    if (match === total) {
      this.entities[entity.id] = entity;
    } else {
      delete this.entities[entity.id];
    }
  }

  run() {
    for (let entity in this.entities) {
      this.process(this.entities[entity]);
    }
  }
}

module.exports = System;
