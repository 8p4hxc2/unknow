const Component = require('core/component');

class Direction extends Component {
  constructor(options) {
    super('direction');

    this.value = options.value || false;
  }
}

module.exports = Direction;
