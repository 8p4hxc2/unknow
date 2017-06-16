const Component = require('core/component');

class Keyboard extends Component {
  constructor() {
    super('keyboard');

    this.keys = [];
  }

  down(code) {
    this.keys[code] = true;
  }

  up(code) {
    this.keys[code] = false;
  }

  isDown(code) {
    return this.keys[code];
  }
}

module.exports = new Keyboard();
