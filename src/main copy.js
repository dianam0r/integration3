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
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;


const $navButton = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__list');
const $iconLink = document.querySelector('#iconlink');
const listItems = $navList.querySelectorAll("li a");

function startDrawing(event) {
  isDrawing = true;
  hasDrawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
}
function draw(event) {
  if (!isDrawing) return;

  ctx.lineTo(getX(event), getY(event));
  ctx.strokeStyle = "#BD2B54";
  ctx.lineWidth = 2;
  ctx.stroke();
  if (!hasDrawing) return;
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

function getX(event) {
  if (event.type.includes("touch")) {
    const rect = canvas.getBoundingClientRect(); // Get canvas bounds
    return event.touches[0].clientX - rect.left; // Adjust for canvas offset
  }
  return event.offsetX;
}

function getY(event) {
  if (event.type.includes("touch")) {
    const rect = canvas.getBoundingClientRect(); // Get canvas bounds
    return event.touches[0].clientY - rect.top; // Adjust for canvas offset
  }
  return event.offsetY;
}


document.getElementById("clearButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hasDrawing = false;
});

document.getElementById("signatureForm").addEventListener("submit", (event) => {
  if (!hasDrawing) {
    alert("You must sign before submitting the form.");
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Form submitted with signature!");
  }
});

const introToStroll = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top 10%",
      end: "+=300",
      scrub: 1,
      pin: ".intro",
    },
  });

  tl.to(".intro", {
    opacity: 0,
    duration: 20,
    ease: "power1.out",
  })
    .to(
      ".intro__plants__left",
      {
        x: -500,
        duration: 20,
        ease: "power1.out",
      },
      "<"
    )
    .to(
      ".stroll",
      {
        opacity: 1,
        duration: 20,
        ease: "power1.out",
      },
      ">"
    )

    .to(
      ".intro__plants__right_down--phone_right",
      {
        x: 200,
        duration: 20,
        ease: "power1.out",
      },
      "<"
    )
    .to(
      ".intro__plants__right_up--phone_left",
      {
        x: -200,
        duration: 20,
        ease: "power1.out",
      },
      "<"
    );

  ScrollTrigger.create({
    trigger: ".stroll",
    start: "top 50%",
    end: "+=800",
    pin: ".stroll",
    scrub: 1,
  });


  ScrollTrigger.create({
    trigger: ".intro__plants__computer",
    start: "top 10%", 
    end: "+=600", 
    pin: ".intro__plants__computer", 
  });

  ScrollTrigger.create({
    trigger: ".intro__plants__phone",
    start: "top 10%", 
    end: "+=400", 
    pin: ".intro__plants__phone", 
  });


  tl.to(".stroll", {
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  })
    .to(
      ".hello_there",
      {
        opacity: 1,
        duration: 2,
        ease: "power1.out",
      },
      ">"
    );

  ScrollTrigger.create({
    trigger: ".hello_there",
    start: "top 50%",
    end: "+=800",
    pin: ".hello_there",
    scrub: 1,
  });

  ScrollTrigger.create({
    trigger: ".intro__plantin__portrait_1",
    start: "top 10%",
    end: "+=1200",
    pin: ".intro__plantin__portrait_1",
    scrub: 1,
  });
};

const showMessages = () => {
  const messages = gsap.utils.toArray(".messages > div"); // Select all message divs

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".messages",
      start: "top 80%", // Start when the .messages container enters the viewport
      end: "bottom 20%", // End when the .messages container exits the viewport
      scrub: 1,
    },
  });

  messages.forEach((message) => {
    tl.fromTo(
      message,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
      }
    );
  });
};

const bibleStamps = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".biblia__photos",
      start: "top 50%",
    },
  });

  tl.fromTo(
    [".biblia__bibli_icon", ".biblia__octo_icon", ".biblia__location_icon"], // First two icons
    { opacity: 0, scale: 0.8 }, // Starting state
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power1.out",
      stagger: 0.5, // Slight delay between the two
    }
  );

};

const init = () => {
  gsap.registerPlugin(ScrollTrigger);

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

  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchend", stopDrawing);

  // introToStroll();
  // showMessages();
  // bibleStamps();
}



init();