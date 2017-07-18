const System = require('core/system');
const systemHandler = require('core/systemHandler');

class FoodFactory extends System {
  constructor() {
    super({"eatable": true});
  }

  process(entity) {
    if (Math.ceil(Math.random() * 200) === 5) {
      entity.delete();
    }
  }

  empty() {
    systemHandler.register('food', {
      position: {
        x: Math.ceil(Math.random() * 1280),
        y: Math.ceil(Math.random() * 720)
      },
      size: {
        width: Math.ceil(Math.random() * 40) + 10,
        height: Math.ceil(Math.random() * 40) + 10
      }
    });
  }
}

module.exports = new FoodFactory();
