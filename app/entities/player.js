const Entity = require('core/entity');

class Player extends Entity {
  constructor(options) {
    super();

    this.add("keyboard");
    this.add("position", options.position);
    this.add("positionList");
    this.add("direction", options.direction);
    this.add("collidable");
    this.add("life");
    this.add("size", options.size);
    this.add("color", {color: 0x000F0B});
  }
}

module.exports = Player;
