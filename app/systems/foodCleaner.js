const System = require('core/system');

class FoodCleaner extends System {
  constructor() {
    super({"eated": true});
  }

  process(entity) {
    entity.delete();
  }
}

module.exports = new FoodCleaner();
