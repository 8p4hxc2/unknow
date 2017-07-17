const System = require('core/system');
const Renderer = require('core/renderer');

class Movement extends System {
  constructor() {
    //"keyboard": true, "direction": true,
    super({"displayed": true});
  }

  process(entity) {
    entity.get('displayed').sprite.x--;// = Math.floor(Math.random()*500);
    //let position = entity.get('position');
    //entity.get('displayed').sprite.x = position.x * 16;
    //entity.get('displayed').sprite.y = position.y * 16+600;
    /*let direction = entity.get('direction');
    let position = entity.get('position');

    if (entity.components.keyboard.isDown(39)) {
      direction.horizontal = 1;
      direction.vertical = 0;
    }

    if (entity.components.keyboard.isDown(37)) {
      direction.horizontal = -1;
      direction.vertical = 0;
    }

    if (entity.components.keyboard.isDown(40)) {
      direction.vertical = 1;
      direction.horizontal = 0;
    }

    if (entity.components.keyboard.isDown(38)) {
      direction.vertical = -1;
      direction.horizontal = 0;
    }

    if (direction.horizontal !== 0) {
      position.x = position.x + direction.horizontal;
      entity.get('displayed').sprite.style.left = position.x + 'px';
    } else {
      position.y = position.y + direction.vertical;
      entity.get('displayed').sprite.style.top = position.y + 'px';
    }*/
  }
}

module.exports = new Movement();
