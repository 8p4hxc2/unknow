function get() {
  //return 'attribute vec3 aVertexPosition;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;void main(void) {  gl_Position = vec4(aVertexPosition, 1.0);}';
  //uPMatrix * uMVMatrix *

return 'attribute vec3 aVertexPosition;'+
        'attribute vec2 aTextureCoord;'+

        'varying highp vec2 vTextureCoord;'+

        'void main(void) {'+
          'gl_Position = vec4(aVertexPosition, 1.0);'+
          'vTextureCoord = aTextureCoord;'+
        '}';
}

module.exports = get;
