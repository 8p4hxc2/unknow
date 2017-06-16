const Position = require('components/position');
const Entity = require('core/entity');

class Body extends Entity {
  constructor(position) {
    super();

    this.add("position", position);
    this.add("keyboard");

    this.add("texture", {color: "red"});
  }
}

module.exports = Body;
