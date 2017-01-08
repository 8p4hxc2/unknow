'use strict';

const Component = require('./component');

class Texture extends Component {
  constructor (src) {
    super('textures');

    this.scr = src || '';
  }
}

module.exports = Texture;
