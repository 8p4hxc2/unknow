const System = require('core/system');
const Renderer = require('core/renderer');

class SpriteRenderer extends System {
  constructor() {
    super({"texture": true, "instantiated": true, "displayed": false});
  }

  process(entity) {
    let sprite = Renderer.createSprite(entity);
    entity.add('displayed', {value: sprite});
    systemHandler.register(entity);
  }
}

module.exports = new SpriteRenderer();
