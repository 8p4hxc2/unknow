const System = require('core/system');
const systemHandler = require('core/systemHandler');

class PlayerFactory extends System {
  constructor() {
    super({"eating": true});
  }

  process(entity) {
    entity.remove('eating');
    systemHandler.register('stomac', {
      position: {
        x: entity.get('position').x + 70 * -entity.get('direction').horizontal,
        y: entity.get('position').y + 70 * -entity.get('direction').vertical
      },
      size: {
        width: 64,
        height: 64
      },
      direction: entity.get('direction')
    });
  }
}

module.exports = new PlayerFactory();
