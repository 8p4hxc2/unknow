'use strict';

const Component = require('core/component');

class Position extends Component {
  constructor(options) {
    super('position');

    this.x = options.x || 0;
    this.y = options.y || 0;
  }
}

module.exports = Position;
