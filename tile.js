'use strict';

const Position = require('./position');
const Size = require('./size');
const Texture = require('./texture');

class Tile {
  constructor (position, size, texture) {
    this.position = new Position(position.x, position.y);
    this.texture = new Texture(texture.src);
    this.size = new Size(size.width, size.height);
  }
}

module.exports = Tile;
