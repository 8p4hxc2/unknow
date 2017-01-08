function get() {
  /*  return 'void main(void) {  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);}';*/

  return 'varying highp vec2 vTextureCoord;' +

    'uniform sampler2D uSampler;' +

    'void main(void) {' +
//    'gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);'+
    'gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));' +
    '}';
};

module.exports = get;
