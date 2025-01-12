const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("underlyingImage");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a black layer over the image
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isScratching = false;

function startScratching(event) {
  isScratching = true;
  scratch(event);
}

function stopScratching() {
  isScratching = false;
}

function scratch(event) {
  if (!isScratching) return;

  // Get mouse or touch position
  const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
  const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

  // Create a circular scratch area
  ctx.globalCompositeOperation = "destination-out"; // Make the black layer transparent
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fill();
}

// Event listeners for mouse and touch interactions
canvas.addEventListener("mousedown", startScratching);
canvas.addEventListener("mousemove", scratch);
canvas.addEventListener("mouseup", stopScratching);
canvas.addEventListener("mouseout", stopScratching);

canvas.addEventListener("touchstart", startScratching);
canvas.addEventListener("touchmove", scratch);
canvas.addEventListener("touchend", stopScratching);
canvas.addEventListener("touchcancel", stopScratching);
