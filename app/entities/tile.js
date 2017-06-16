'use strict';

const Position = require('components/position');
const Size = require('components/size');
const Texture = require('components/texture');
const Entity = require('core/entity');

class Tile extends Entity {
  constructor(position, size, texture) {
		super();
    this.position = new Position(position.x, position.y);
    this.texture = new Texture(texture.src);
    this.size = new Size(size.width, size.height);
  }
}

module.exports = Tile;
