const Position = require('components/position');
const Entity = require('core/entity');

class BodyPart extends Entity {
  constructor(position, size, texture) {
    super();
    this.position = new Position(position.x, position.y);
  }
}

module.exports = Body;
