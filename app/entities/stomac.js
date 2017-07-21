const Entity = require('core/entity');

class Stomac extends Entity {
  constructor(options) {
    super();

    this.add("position", options.position);
    this.add("direction", options.direction);
    this.add("delayedDirection");
    this.add("collidable");
    this.add("life");
    this.add("follower");
    this.add("keyboard");
    this.add("size", options.size);
    this.add("color", {color: 0x000F0B});
  }
}

module.exports = Stomac;
