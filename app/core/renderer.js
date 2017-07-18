const PIXI = require('pixi.js');
const systemHandler = require('core/systemHandler');

class Renderer {
  // html
  static kcreateSprite(entity) {
    let sprite = document.createElement('div');
    sprite.style = 'position: absolute; background-color: ' + entity.get('texture').color + '; left: ' + entity.get('position').x + 'px;    top: ' + (720 + entity.get('position').y) + 'px;width: ' + entity.get('size').width * 10 + 'px;height: ' + entity.get('size').height * 10 + 'px';

    return sprite;
  }

  // pixi
  initialize() {
    this.app = new PIXI.Application(1280, 720, {backgroundColor: 0x1099bb});
    document.body.appendChild(this.app.view);
  }

  createSprite(entity) {
    var bunny = PIXI.Sprite.fromImage('resources/ground66.png')

    // center the sprite's anchor point
    bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    //bunny.x = this.app.renderer.width / 2;
    //bunny.y = this.app.renderer.height / 2;

    this.app.stage.addChild(bunny);

    return bunny;
  }

  createGraphic(entity) {
    var graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(entity.get('color').color, 1);
    graphics.drawRect(entity.get('position').x, entity.get('position').y, entity.get('size').width, entity.get('size').height);
    graphics.endFill();

    this.app.stage.addChild(graphics);

    return graphics;
  }

  deleteGraphic(entity) {
    //this.app.stage.removeChild(entity.get('displayed').sprite);
    entity.get('displayed').sprite.destroy();
  }

  run() {
    this.app.ticker.add((delta) => {
      document.getElementById('fps').innerHTML = Math.ceil(this.app.ticker.FPS);
      systemHandler.run();
    });
  }
}

module.exports = new Renderer();
