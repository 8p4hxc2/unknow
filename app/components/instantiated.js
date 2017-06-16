const Component = require('core/component');

class Instantiated extends Component {
  constructor(options) {
    super('onScreen');

    this.instantiated = options.value || false;
  }
}

module.exports = Instantiated;
