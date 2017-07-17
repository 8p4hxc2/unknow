const System = require('core/system');
const systemHandler = require('core/systemHandler');

class Factory extends System {
  constructor() {
    super({"position": true, "graphic": true, "instantiated": false});
  }

  process(entity) {
    entity.add('instantiated', {value: true});
    systemHandler.register(entity);
  }
}

module.exports = new Factory();
