const System = require('core/system');
const systemHandler = require('core/systemHandler');

class GraphicFactory extends System {
  constructor() {
    super({"position": true, "color": true, "instantiated": false});
  }

  process(entity) {
    entity.add('instantiated', {value: true});
    systemHandler.register(entity);
  }
}

module.exports = new GraphicFactory();
