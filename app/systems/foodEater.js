const System = require('core/system');

class FoodEater extends System {
  constructor() {
    super({"life": true, "position": true, "size": true, "displayed": true});
  }

  process(entity) {
    let collision = 0;
    let x = entity.get('position').x;
    let y = entity.get('position').y;
    let width = entity.get('size').width;
    let height = entity.get('size').height;

    for (let id in this.entities) {
      if (id === entity.id || !this.entities[id].get('eatable')) {
        continue;
      }
      let positionCollision = this.entities[id].get('position');
      let sizeCollision = this.entities[id].get('size');
      //if (entity.get('position').x === this.entities[i].get('position').x && entity.get('position').y === this.entities[i].get('position').y) {
      if (x < positionCollision.x + sizeCollision.width && x + width > positionCollision.x && y < positionCollision.y + sizeCollision.height && height + y > positionCollision.y) {
        collision++;
      }

      if (collision !== 0) {
        this.entities[id].add('eated');
        entity.add('eating');
        systemHandler.registerFromObject(this.entities[id]);
        systemHandler.registerFromObject(entity);
        break;
      }
    }

  }
}

module.exports = new FoodEater();
