const canvas = document.getElementById("nightSky");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");

const width = () => {
  return window.innerWidth * 2;
};
const height = () => {
  return window.innerHeight * 2;
};
const canvasLength = () => {
  return width() > height() ? width() : height();
};
const minStarOpacity = 0.1;
const maxStarOpacity = 0.8;
const maxStarRadius = 1.5;
const backgroundColor = "#000d21"
let counter = 0;

const stars = createStars(canvasLength(), canvasLength(), 50);

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function sizingCanvas() {
  canvas.width = canvasLength();
  canvas.height = canvasLength();
}

function createStars(width, height, spacing) {
  const stars = [];

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const star = {
        x: x + randomNum(0, spacing),
        y: y + randomNum(0, spacing),
        r: randomNum(0, maxStarRadius),
      };
      stars.push(star);
    }
  }
  return stars;
}

function fillStar(context, x, y, r, fillStyle) {
  context.beginPath();
  context.fillStyle = fillStyle;
  // x, y, 반경, 각도시작점, 각도종료점, 원 그리는 방향
  context.arc(x, y, r, 0, Math.PI * 2);
  context.fill();
}

function getOpacity(factor) {
  const opacityIncrement =
    (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
  const opacity = minStarOpacity + opacityIncrement;
  return opacity;
}

function render() {
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvasLength(), canvasLength());
  stars.forEach(function (star, i) {
    const factor = counter * i;
    const x = star.x;
    const y = star.y;
    const opacity = getOpacity(factor);
    fillStar(context, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);
  });

  counter++;
  requestAnimationFrame(render);
}

// transform-origin 적용 안되는 현상 방지
setTimeout(() => {
    sizingCanvas();
    render();
}, 100);