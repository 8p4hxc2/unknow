const System = require('core/system');
const Renderer = require('core/renderer');

class GraphicRenderer extends System {
  constructor() {
    super({"color": true, "instantiated": true, "displayed": false});

    //Renderer.initialize(this);
  }

  process(entity) {
    let graphic = Renderer.createGraphic(entity);
    entity.add('displayed', {value: graphic});
    systemHandler.register(entity);
  }
}

module.exports = new GraphicRenderer();
