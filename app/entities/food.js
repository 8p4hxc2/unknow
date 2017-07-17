const Position = require('components/position');
const Entity = require('core/entity');

class Food extends Entity {
  constructor(position, size) {
    super();

    this.add("position", position);
    this.add("size", size);
    this.add("color", {color: 0xFFFF0B});
  }
}

module.exports = Food;
