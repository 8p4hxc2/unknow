const System = require('core/system');
const Renderer = require('core/renderer');

class KeyboardMovement extends System {
  constructor() {
    super({"displayed": true, "keyboard": true, "follower": false});
  }

  process(entity) {
    let direction = entity.get('direction');
    let position = entity.get('position');

    if (entity.components.keyboard.isDown(39)) {
      direction.horizontal = 2;
      direction.vertical = 0;
    }

    if (entity.components.keyboard.isDown(37)) {
      direction.horizontal = -2;
      direction.vertical = 0;
    }

    if (entity.components.keyboard.isDown(40)) {
      direction.vertical = 2;
      direction.horizontal = 0;
    }

    if (entity.components.keyboard.isDown(38)) {
      direction.vertical = -2;
      direction.horizontal = 0;
    }

    if (direction.horizontal !== 0) {
      position.x = position.x + direction.horizontal;
    } else {
      position.y = position.y + direction.vertical;
    }
  }
}

module.exports = new KeyboardMovement();
