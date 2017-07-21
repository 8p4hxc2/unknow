require('app-module-path').addPath(__dirname);

const systemHandler = require('core/systemHandler');
const keyboardHandler = require('core/keyboardHandler');
const renderer = require('core/renderer');
//const body = require('entities/body');
//const food = require('entities/food');

//systemHandler.add("physic");
systemHandler.add("foodFactory");
systemHandler.add("foodEater");
systemHandler.add("foodCleaner");

systemHandler.add("stomacFactory");
systemHandler.add("stomacMovement");
//systemHandler.add("graphicCollector");
//systemHandler.add("graphicFactory");
//systemHandler.add("collision");
systemHandler.add("playerMovement");

systemHandler.add("movement");
systemHandler.add("graphicRenderer");


renderer.initialize();
renderer.run();

systemHandler.register('player', {
  position: {
    x: 0,
    y: 0
  },
  size: {
    width: 64,
    height: 64
  }
});

/*setInterval(function() {
  systemHandler.register(new body({
    x: Math.floor(Math.random()*80),
    y: -Math.floor(Math.random()*80),
  }, {
    horizontal: 1,
    vertical: 0
  }, {
    width: 4,
    height: 4
  }));
}, 50);*/

animate();
function animate() {
  systemHandler.run();
  requestAnimationFrame(animate);
}
