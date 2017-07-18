const System = require('core/system');
const Renderer = require('core/renderer');
const systemHandler = require('core/systemHandler');

class GraphicRenderer extends System {
  constructor() {
    super({"color": true, "displayed": false});
  }

  process(entity) {
    let graphic = Renderer.createGraphic(entity);
    entity.add('displayed', {value: graphic});
    systemHandler.registerFromObject(entity);
  }

  remove(entity) {
    Renderer.deleteGraphic(entity);
    super.remove(entity);
  }
}

module.exports = new GraphicRenderer();
