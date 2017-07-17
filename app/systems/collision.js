const System = require('core/system');
const keyboard = require('components/keyboard');
const body = require('entities/food');
const systemHandler = require('core/systemHandler');

class FoodSpawn extends System {
  constructor() {
    super({"collide": true, "position": true, "size": true, "displayed": true});
  }

  process(entity) {
    let collision = 0;
    let x = entity.get('position').x;
    let y = entity.get('position').y;
    let width = entity.get('size').width;
    let height = entity.get('size').height;

    for (let id in this.entities) {
      if (id === entity.id) {
        continue;
      }
      let positionCollision = this.entities[id].get('position');
      let sizeCollision = this.entities[id].get('size');
      //if (entity.get('position').x === this.entities[i].get('position').x && entity.get('position').y === this.entities[i].get('position').y) {
      if (x < positionCollision.x + sizeCollision.width && x + width > positionCollision.x && y < positionCollision.y + sizeCollision.height && height + y > positionCollision.y) {
        collision++;
      }
    }

    let direction = entity.get('direction');
    if (collision !== 0 && direction) {
      direction.horizontal = 0;
      direction.vertical = 0;
    }
  }
}

module.exports = new FoodSpawn();
