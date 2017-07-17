const Component = require('core/component');

class Texture extends Component {
  constructor (options) {
    super('textures');

    this.color=options.color;
    //this.scr = src || '';
  }
}

module.exports = Texture;
