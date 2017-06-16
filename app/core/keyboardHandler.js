const keyboard = require("components/keyboard");

class KeyboardHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      this.downHandler(e);
    }, false);

    window.addEventListener("keyup", (e) => {
      this.upHandler(e);
    }, false);
  }

  isUp(key) {
    return !this.keys[key];
  }

  isDown(key) {
    return this.keys[key];
  }

  downHandler(event) {
    keyboard.down(event.keyCode);
  }

  upHandler(event) {
    keyboard.up(event.keyCode);
  }
}
module.exports = new KeyboardHandler();
