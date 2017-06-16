const System = require('core/system');
const keyboard = require('components/keyboard');
const body = require('entities/body');
const systemHandler = require('core/systemHandler');

class SpriteSpawn extends System {
  run() {
    if (keyboard.isDown(13)) {
      systemHandler.register(new body({
        x: Math.random() * 1000,
        y: Math.random() * 1000
      }));
    }

    //super();
  }
}

module.exports = new SpriteSpawn();
