'use strict';

const Component = require('core/component');

class Size extends Component {
  constructor (width, height) {
    super('size');

    this.width = width || 0;
    this.height = height || 0;
  }
}

module.exports = Size;
