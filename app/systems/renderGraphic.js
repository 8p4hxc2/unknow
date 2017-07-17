const System = require('core/system');
const Renderer = require('core/renderer');

class RenderGraphic extends System {
  constructor() {
    super({"graphic": true, "instantiated": true, "displayed": false});

    //Renderer.initialize(this);
  }

  process(entity) {
    let graphic = Renderer.createGraphic(entity);
    entity.add('displayed', {value: graphic});
    systemHandler.register(entity);
  }
}

module.exports = new RenderGraphic();
