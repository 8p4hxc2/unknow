const System = require('core/system');
const systemHandler = require('core/systemHandler');

class FoodFactory extends System {
  constructor() {
    super({"eatable": true});
  }

  selfProcess() {
    //    if (Math.ceil(Math.random() * 5) === 1) {
    if (this.count === 0) {
      systemHandler.register('food', {
        position: {
          x: Math.ceil(Math.random() * 500),
          y: Math.ceil(Math.random() * 500)
        },
        size: {
          width: 64,
          height: 64
        }
      });
    }
  }

  process(entity) {}
}

module.exports = new FoodFactory();
