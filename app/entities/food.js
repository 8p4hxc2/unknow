const Position = require('components/position');
const Entity = require('core/entity');

class Food extends Entity {
  constructor(options) {
    super();

    this.add("eatable");
    this.add("position", options.position);
    this.add("size", options.size);
    this.add("color", {color: 0xFFFF0B});
  }
}

module.exports = Food;
