let characterImg;
let characterX = 50; 

function preload() {
  
  backgroundImg = loadImage('campo florido.avif');
  characterImg = loadImage('imagem-removebg-preview.png');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  image(characterImg, characterX, height - characterImg.height);

  characterX += 1;

  
  if (characterX > width) {
    characterX = -characterImg.width;
  }
}