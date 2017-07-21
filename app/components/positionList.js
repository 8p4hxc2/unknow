const Component = require('core/component');

class PositionList extends Component {
  constructor(options = {}) {
    super('positionList');

    this.positionList = options.positionList || [];
  }
}

module.exports = PositionList;
