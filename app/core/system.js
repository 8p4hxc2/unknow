class System {
  constructor(blueprint) {
    this.blueprint = blueprint;
    this.entities = [];
    this.count = 0;
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
      if (!this.entities[entity.id]) {
        this.count++;
        this.entities[entity.id] = entity;
      }
    } else if (this.entities[entity.id]) {
      delete this.entities[entity.id];
      this.count--;
    }
  }

  run() {
    if (this.count === 0) {
      this.empty();
      return;
    }

    for (let entity in this.entities) {
      this.process(this.entities[entity]);
    }
  }

  empty() {}

  remove(entity) {
    this.count--;
    delete this.entities[entity.id];
  }
}

module.exports = System;
