const Component = require('core/component');

class DelayedDirection extends Component {
  constructor(options = {}) {
    super('delayedDirection');

    this.offset = 0;
    this.horizontal = 0;
    this.vertical = 0;
  }
}

module.exports = DelayedDirection;
