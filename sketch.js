function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
}

function draw() {
  background(0);

  // Movimento
  let movimento = sin(frameCount * 0.07) * 5;

  let movimentoAzul = sin(frameCount * 0.09) * 6;


  // Vermelho com movimento
  fill(238, 36, 0);
  rect(movimento, 0, 362, 316);

  // Branco
  fill(237, 241, 237);
  rect(373, 0, 427, 316);
  rect(0, 334, 362, 177);
  rect(373, 334, 427, 177);
  rect(86, 527, 276, 273);
  rect(373, 770, 235, 30);
  rect(620, 527, 180, 273);

  // Amarelo
  fill(250, 209, 0);
  rect(0, 527, 75, 273);

  // Azul com movimento
  fill(31, 32, 117);
  rect(373, movimentoAzul + 527, 235, 230);

  // Sombras
  for (let x = 30; x < width; x++) {
    let sombra = map(x, 30, width, 0, 40);
    fill(0, 0, 0, sombra);
    rect(x, 0, 1, height);
  }

  for (let y = 400; y < height; y++) {
    let sombra = map(y, 400, height, 0, 120);
    fill(0, 0, 0, sombra);
    rect(0, y, width, 1);
  }

  // Textura
  for (let i = 0; i < 100000; i++) {
    fill(0, 0, 0, 14);
    rect(random(width), random(height), 1.10, 1.10);
  }
}
