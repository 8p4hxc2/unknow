const Component = require('core/component');

class Size extends Component {
  constructor (options) {
    super('size');

    this.width = options.width || 0;
    this.height = options.height || 0;
  }
}

module.exports = Size;
