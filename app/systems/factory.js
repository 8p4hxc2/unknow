const System = require('core/system');
const systemHandler = require('core/systemHandler');

class Factory extends System {
  constructor() {
    super({"position": true, "texture": true, "instantiated": false});
  }

  process(entity) {
    console.log('PROCESS FACTORY');
    entity.add('instantiated', {value: true});
    systemHandler.register(entity);
  }
}

module.exports = new Factory();
