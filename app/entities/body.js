const Position = require('components/position');
const Entity = require('core/entity');

class Body extends Entity {
  constructor(position, direction, size) {
    super();

    this.add("position", position);
    this.add("direction", direction);
    this.add("size", size);
    this.add("keyboard");
    this.add("body", {
      type: "dynamic",
      density: 1.0,
      friction: 0.3,
      restitution: 0.0
    });
    this.add("texture", {color: "green"});
  }
}

module.exports = Body;
