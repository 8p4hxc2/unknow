const Component = require('core/component');

class Displayed extends Component {
  constructor(options) {
    super('displayed');
    this.sprite = options.value;
  }
}

module.exports = Displayed;
