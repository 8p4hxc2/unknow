const System = require('core/system');
const Renderer = require('core/renderer');

class Render extends System {
  constructor() {
    super({"texture": true, "instantiated": true, "displayed": false});
  }

  process(entity) {
    console.log('PROCESS SYSTEM');
    let sprite = Renderer.createSprite(entity);
    entity.add('displayed', {value:sprite});
    systemHandler.register(entity);
    document.body.appendChild(sprite);
  }
}

module.exports = new Render();
