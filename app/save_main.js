require('app-module-path').addPath(__dirname);

function run() {
	//STATS.Start();
	window.requestAnimationFrame(run);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	//SystemsEngine.run();
	//STATS.End();
}

function init() {
	var canvas = document.getElementById('glcanvas')

	initWebGL(canvas); // Initialise le contexte WebGL
	initShaders();
	initBuffer();
	initTextures().then(function () {
		// Continue seulement si le WebGL est disponible et est en train de fonctionner

		if (gl) {
			gl.clearColor(0.0, 1.0, 0.0, 1.0); // Met la couleur d'effacement au noir et complétement opaque
			gl.enable(gl.DEPTH_TEST); // Active le test de profondeur
			gl.depthFunc(gl.LEQUAL); // Les objets proches cachent les objets lointains
			run(); // Efface les couleurs et le buffer de profondeur.
		}

		var Tile = require('entities/tile');
		console.log(new Tile({ x: 10, y: 20 }, { width: 50, height: 50 }, { src: 'ground.png' }));
	});
}

function makePerspective(fovy, aspect, znear, zfar) {
	var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
	var ymin = -ymax;
	var xmin = ymin * aspect;
	var xmax = ymax * aspect;

	return makeFrustum(xmin, xmax, ymin, ymax, znear, zfar);
}

function loadIdentity() {
	mvMatrix = [1, 1, 1, 1];
}

function makeFrustum(left, right,
	bottom, top,
	znear, zfar) {
	var X = 2 * znear / (right - left);
	var Y = 2 * znear / (top - bottom);
	var A = (right + left) / (right - left);
	var B = (top + bottom) / (top - bottom);
	var C = -(zfar + znear) / (zfar - znear);
	var D = -2 * zfar * znear / (zfar - znear);

	return $M([
		[X, 0, A, 0],
		[0, Y, B, 0],
		[0, 0, C, D],
		[0, 0, -1, 0]
	]);
}


function drawScene() {
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	//perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0);

	//loadIdentity();
	//mvTranslate([-0.0, 0.0, -6.0]);


	gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

	gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);
	gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);
	//setMatrixUniforms();

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
	gl.uniform1i(gl.getUniformLocation(shaderProgram, "uSampler"), 0);

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

	gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	//gl.drawArrays(gl.LINES, 0, 3);
}

function initWebGL(canvas) {
	// Initialise la variable gloable gl à null
	gl = null;

	try {
		// Essaye de récupérer le contexte standard. En cas d'échec, il teste l'appel experimental
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	} catch (e) {}

	// Si le contexte GL n'est pas récupéré, on l'indique à l'utilisateur.
	if (!gl) {
		alert("Impossible d'initialiser le WebGL. Il est possible que votre navigateur ne supporte pas cette fonctionnalité.");
	}
}

function initShaders() {
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentSource = require('./fragment')();
	var vertexSource = require('./vertex')();

	gl.shaderSource(fragmentShader, fragmentSource);

	// Compile le programme shader
	gl.compileShader(fragmentShader);

	// Vérifie si la compilation s'est bien déroulée
	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
		alert("Une erreur est survenue au cours de la compilation des shaders: " + gl.getShaderInfoLog(fragmentShader));
		return null;
	}

	gl.shaderSource(vertexShader, vertexSource);

	// Compile le programme shader
	gl.compileShader(vertexShader);

	// Vérifie si la compilation s'est bien déroulée
	if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		alert("Une erreur est survenue au cours de la compilation des shaders: " + gl.getShaderInfoLog(vertexShader));
		return null;
	}

	// Créer le programme shader
	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	// Faire une alerte si le chargement du shader échoue

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert("Impossible d'initialiser le shader.");
	}

	gl.useProgram(shaderProgram);

	vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	gl.enableVertexAttribArray(vertexPositionAttribute);

	textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
	gl.enableVertexAttribArray(textureCoordAttribute);
}

function initTextures() {
	return new Promise(function (resolve) {
		cubeTexture = gl.createTexture();
		cubeImage = new Image();
		cubeImage.onload = function () {
			handleTextureLoaded(cubeImage, cubeTexture);
			resolve();
		}
		cubeImage.src = "resources/ground.png";
	});
}

function handleTextureLoaded(image, texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); // required if no mipmaps?
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); //LINEAR_MIPMAP_NEAREST);
	//gl.generateMipmap(gl.TEXTURE_2D);
	//gl.bindTexture(gl.TEXTURE_2D, null);
}

function initBuffer() {
	squareVerticesBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

	var vertices = [
		0.0, 0.0, 0.0,
		1.0, 0.0, 0.0,
		1.0, 1.0, 0.0,
		0.0, 1.0, 0.0
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	index_buffer = gl.createBuffer();

	var indices = [0, 1, 2, 0, 2, 3];
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

	cubeVerticesTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVerticesTextureCoordBuffer);

	var textureCoordinates = [
		// Front
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
		gl.STATIC_DRAW);
}
