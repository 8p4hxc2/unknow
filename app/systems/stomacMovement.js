const System = require('core/system');
const Renderer = require('core/renderer');

class KeyboardMovement extends System {
  constructor() {
    super({"displayed": true, "follower": true});
  }

  process(entity) {
    let direction = entity.get('direction');
    let position = entity.get('position');
    let delayedDirection = entity.get('delayedDirection');

    if (entity.get('keyboard').isDown(39)) {
      delayedDirection.offset = 64;
      delayedDirection.horizontal = 2;
      delayedDirection.vertical = 0;
    }

    if (entity.get('keyboard').isDown(37)) {
      delayedDirection.offset = 64;
      delayedDirection.horizontal = -2;
      delayedDirection.vertical = 0;
    }

    if (entity.get('keyboard').isDown(40)) {
      delayedDirection.offset = 64;
      delayedDirection.vertical = 2;
      delayedDirection.horizontal = 0;
    }

    if (entity.get('keyboard').isDown(38)) {
      delayedDirection.offset = 64;
      delayedDirection.vertical = -2;
      delayedDirection.horizontal = 0;
    }

    delayedDirection.offset--;

    if (delayedDirection.offset === 0) {
      direction.horizontal = delayedDirection.horizontal;
      direction.vertical = delayedDirection.vertical;
    }

    position.x = position.x + direction.horizontal;
    position.y = position.y + direction.vertical;
  }
}

module.exports = new KeyboardMovement();
