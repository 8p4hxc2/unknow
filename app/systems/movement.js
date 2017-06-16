const System = require('core/system');
const Renderer = require('core/renderer');

class Movement extends System {
  constructor() {
    super({"keyboard": true, "instantiated": true, "displayed": true});
  }

  process(entity) {
    if (entity.components.keyboard.isDown(39)) {
      entity.get('displayed').sprite.style.left = (parseInt(entity.get('displayed').sprite.style.left) + 5) + 'px';
    }

    if (entity.components.keyboard.isDown(37)) {
      entity.get('displayed').sprite.style.left = (parseInt(entity.get('displayed').sprite.style.left) - 5) + 'px';
    }

    if (entity.components.keyboard.isDown(40)) {
      entity.get('displayed').sprite.style.top = (parseInt(entity.get('displayed').sprite.style.top) + 5) + 'px';
    }

    if (entity.components.keyboard.isDown(38)) {
      entity.get('displayed').sprite.style.top = (parseInt(entity.get('displayed').sprite.style.top) - 5) + 'px';
    }
  }
}

module.exports = new Movement();
