require('app-module-path').addPath(__dirname);

const systemHandler = require('core/systemHandler');
const keyboardHandler = require('core/keyboardHandler');
/*const systemRenderer = require('systems/renderer');


systemRenderer.register(newEntity);
console.log(systemRenderer);


const level = alias.require("@factories/level");
const systemHandler = alias.require("@handlers/system");
const resourceHandler = alias.require("@handlers/resource");
const keyboardHandler = alias.require("@handlers/keyboard");

function initialize() {
  systemHandler.add("physic");
  systemHandler.add("animation");
  systemHandler.add("renderer");
  systemHandler.add("player");

  resourceHandler.run().then(function() {
    level.create();
    animate();
  });
}

function animate() {
  systemHandler.run();
  requestAnimationFrame(animate);
}
*/

systemHandler.add("render");
systemHandler.add("factory");
systemHandler.add("movement");
systemHandler.add("spriteSpawn");

animate();

function animate() {
  systemHandler.run();
  requestAnimationFrame(animate);
}
