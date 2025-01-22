
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js';
gsap.registerPlugin(ScrollTrigger, Draggable);
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;
const targetNumber = 40000; // The correct number
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");


Draggable.create(".draggable", {
  bounds: ".container",
  inertia: true
});

function startDrawing(event) {
  isDrawing = true;
  hasDrawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
}

function draw(event) {
  if (!isDrawing) return;

  ctx.lineTo(getX(event), getY(event));
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
  if (!hasDrawing) return;
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

// Get mouse or touch coordinates
function getX(event) {
  return event.type.includes("touch") ? event.touches[0].clientX : event.offsetX;
}

function getY(event) {
  return event.type.includes("touch") ? event.touches[0].clientY : event.offsetY;
}

document.getElementById("clearButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hasDrawing = false;
});

// Event listeners for mouse and touch
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stopDrawing);

document.getElementById("signatureForm").addEventListener("submit", (event) => {
  if (!hasDrawing) {
    alert("You must sign before submitting the form.");
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Form submitted with signature!");
  }
});

guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userGuess = parseInt(guessInput.value, 10);

  const difference = Math.abs(userGuess - targetNumber);

  // Change input field color and provide feedback based on the difference
  if (userGuess === targetNumber) {
    guessInput.style.backgroundColor = "green";
    guessResult.textContent = "🎉 Correct! You guessed the number!";
    guessResult.style.color = "green";
  } else if (difference <= 10000) { // Close range
    guessInput.style.backgroundColor = "yellow";
    guessResult.textContent = "You're close! Try again.";
    guessResult.style.color = "orange";
  } else { // Far away
    guessInput.style.backgroundColor = "red";
    guessResult.textContent = "Too far! Try again.";
    guessResult.style.color = "red";
  }
});

// let tiltSquare = document.getElementById("tiltSquare");

// window.addEventListener("deviceorientation", function (event) {
//   const gamma = event.gamma; 

//   let movement = gamma * 2; 
//   let windowWidth = window.innerWidth;

//   let newLeft = Math.max(0, Math.min(windowWidth - 100, windowWidth / 2 + movement));

//   tiltSquare.style.left = newLeft + "px";
// });
