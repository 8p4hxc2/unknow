const Component = require('core/component');

class Graphic extends Component {
  constructor(options) {
    super('graphic');

    this.color = options.color;
    this.type = options.type || 'rectangle';
  }
}

module.exports = Graphic;
