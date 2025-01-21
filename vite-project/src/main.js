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

let mm = gsap.matchMedia();

mm.add("(min-width: 350px)", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "top 10%",
      end: "+=500",
      pin: ".intro__grid",
      scrub: true,
    },
  });

  tl.to(".intro", {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  })
    .to(
      ".stroll",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .to(
      ".intro__plantin",
      {
        marginBottom: 0,
        y: -300,
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
  tl.to(".stroll", {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  })
  tl.to(".hello_there", {
    opacity: 1,
    duration: 1,
    ease: "power1.out",
  })
  tl.to(".intro__plantin__writing_icon, .intro__plantin__post_it", {
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  },
    "<")
    .to(
      ".intro__plantin",
      {
        x: -20,
        duration: 1,
        ease: "power1.out",
      },
      "<"
    );
});

const showMessages = () => {
  const messages = gsap.utils.toArray(".messages > div"); // Select all message divs

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".messages",
      start: "top 50%", 
      end: "bottom 70%", 
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

  showMessages();
}



init();