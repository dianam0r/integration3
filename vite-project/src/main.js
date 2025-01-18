// const canvas = document.getElementById("scratchCanvas");
// const ctx = canvas.getContext("2d");
// const image = document.getElementById("underlyingImage");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Draw a black layer over the image
// ctx.fillStyle = "black";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// let isScratching = false;

// function startScratching(event) {
//   isScratching = true;
//   scratch(event);
// }

// function stopScratching() {
//   isScratching = false;
// }

// function scratch(event) {
//   if (!isScratching) return;

//   // Get mouse or touch position
//   const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
//   const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

//   // Create a circular scratch area
//   ctx.globalCompositeOperation = "destination-out"; // Make the black layer transparent
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2);
//   ctx.fill();
// }

// // Event listeners for mouse and touch interactions
// canvas.addEventListener("mousedown", startScratching);
// canvas.addEventListener("mousemove", scratch);
// canvas.addEventListener("mouseup", stopScratching);
// canvas.addEventListener("mouseout", stopScratching);

// canvas.addEventListener("touchstart", startScratching);
// canvas.addEventListener("touchmove", scratch);
// canvas.addEventListener("touchend", stopScratching);
// canvas.addEventListener("touchcancel", stopScratching);


const init = () => {

  const $navButton = document.querySelector('.nav__button');
  const $navList = document.querySelector('.nav__list');
  const $iconLink = document.querySelector('#iconlink');
  const listItems = $navList.querySelectorAll("li a");

  $navButton.classList.remove('hidden');
  $navList.classList.add("hidden");

  const openNavigation = () => {
    $navButton.setAttribute("aria-expanded", "true");
    $iconLink.setAttribute("xlink:href", "#close");
    $navList.classList.remove("hidden");
  }

  const closeNavigation = () => {
    $navButton.setAttribute("aria-expanded", "false");
    $iconLink.setAttribute("xlink:href", "#navicon");
    $navList.classList.add("hidden");
  }

  const toggleNavigation = () => {
    const open = $navButton.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();
  }


  const handleBlur = () => {
    //if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
    closeNavigation();
    //}
  }

  $navButton.addEventListener("click", toggleNavigation);

  // add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  // Close the disclosure if a user presses the escape key
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });
}



init();