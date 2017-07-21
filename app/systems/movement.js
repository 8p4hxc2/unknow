const System = require('core/system');
const Renderer = require('core/renderer');

class Movement extends System {
  constructor() {
    //"keyboard": true, "direction": true,
    super({"displayed": true});
  }

  process(entity) {
    let position = entity.get('position');
    entity.get('displayed').sprite.x = position.x;
    entity.get('displayed').sprite.y = position.y;
  }
}

module.exports = new Movement();
