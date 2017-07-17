const Component = require('core/component');

class Color extends Component {
  constructor(options) {
    super('color');

    this.color = options.color;
  }
}

module.exports = Color;
