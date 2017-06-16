class Renderer {
  static createSprite(entity) {
    let sprite = document.createElement('div');
    sprite.style = 'position: absolute; background-color: red; left: '+entity.get('position').x+'px;    top: '+entity.get('position').y+'px;      width: 50px;      height: 50px';

    return sprite;
  }
}

module.exports = Renderer;
