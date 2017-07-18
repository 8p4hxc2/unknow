const System = require('core/system');
const Renderer = require('core/renderer');

class GraphicRenderer extends System {
  constructor() {
    super({"collectable": true});
  }

  process(entity) {
    Renderer.deleteGraphic(entity);
    entity.component=[];
    systemHandler.registerFromObject(entity);
  }
}

module.exports = new GraphicRenderer();
