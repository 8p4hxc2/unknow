const Component = require('core/component');

class Direction extends Component {
  constructor(options = {}) {
    super('direction');

    this.horizontal = options.horizontal || 0;
    this.vertical = options.vertical || 0;
  }
}

module.exports = Direction;
