const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;

const $navButton = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__list');
const $iconLink = document.querySelector('#iconlink');
const listItems = $navList.querySelectorAll("li a");


const timeline = () =>{
const timeline = document.querySelector(".timeline__line");
const timelineWidth = timeline.offsetWidth;
const amountToScroll = timelineWidth - window.innerWidth;
console.log(timeline.offsetWidth);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 20%",
    end: "+=" + amountToScroll,
    pin: true,
    scrub: 1,
    markers: true,
  },
});

// tl.to(".timeline",
//   {
//     x: -amountToScroll,
//     duration: 20,
//     ease: "none",

//   }
// )
}

function startDrawing(event) {
  isDrawing = true;
  hasDrawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  document.querySelector(".biblia__submit").style.display = "block";
  document.querySelector(".biblia__write").style.display = "none";
  clearForm();
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

const clearForm = () => {
  document.querySelector(".biblia__retry").style.display = "block";
  document.getElementById("clearButton").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasDrawing = false;
    document.querySelector(".biblia__second_page").style.display = "none";
    document.querySelector(".biblia__submit").style.display = "none";
    document.querySelector(".biblia__write").style.display = "block";
    document.querySelector(".biblia__retry").style.display = "none";
  });
}

document.getElementById("signatureForm").addEventListener("submit", (event) => {
  if (!hasDrawing) {
    alert("You must sign before submitting the form.");
    event.preventDefault();
  } else {
    document.querySelector(".biblia__second_page").style.display = "block";
    document.querySelector(".biblia__submit").style.display = "none";
    document.querySelector(".after__biblia").style.display = "block";
    timeline();
    event.preventDefault();
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

const bibleStamps = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".biblia__photos",
      start: "top 50%",
      end: "bottom top",
      scrub: true,
    },
  });

  tl.fromTo(
    [".biblia__bibli_icon", ".biblia__octo_icon", ".biblia__location_icon"],
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power1.out",
      stagger: 0.5,
    }
  )
    .to(
      [".biblia__bibli_icon", ".biblia__octo_icon", ".biblia__location_icon"],
      {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.5,
      }
    );
};

const woodBlock = () => {
  document.querySelectorAll(".conclusion_biblia__hand, .conclusion_biblia__g_woodblock, .conclusion_biblia__click_icon")
    .forEach(element => {
      element.addEventListener("click", () => {
        const timeline = gsap.timeline();

        timeline.fromTo(
          ".conclusion_biblia__g_woodblock",
          { rotation: 0, y: 0, opacity: 1 },
          {
            rotation: 360,
            y: 585,
            duration: 0.5,
            ease: "power1.out",
          }
        );

        timeline.fromTo(
          ".conclusion_biblia__g_woodblock",
          { opacity: 1 },
          { opacity: 0, duration: 0.1 },
          "+=0"
        );

        timeline.fromTo(
          ".g_woodblock2__flex",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            onStart: () => {
              document.querySelector(".g_woodblock2__flex").style.display = "flex";
            }
          },
          "-=0.2"
        );
      });
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".g_woodblock2__flex",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
    }
  }).fromTo(
    ".g_woodblock2__flex",
    {
      y: 0,
      scale: 1
    },
    {
      y: "+=460",
      scale: 1.8,
      rotation: 365,
      duration: 1,
      ease: "power1.out"
    }
  ).to(
    ".g_woodblock2__flex",
    {
      opacity: 0,
      duration: 0.2,
      ease: "power1.out"
    }
  )
    .to(
      ".grid__g",
      {
        opacity: 1,
        duration: 0.2,
        ease: "power1.out"
      },
      "-=0.3"
    )
    ;
};


const dateIcon = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".after__bible",
      start: "top 0%",
      end: "bottom 50%",
      scrub: true,
    },
  });

  tl.fromTo(
    ".conclusion_biblia__date_icon",
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power1.out",
    }
  ).to(".conclusion_biblia__date_icon", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power1.out",
  });
};

const toggleAnswer = () => {
  const question = document.querySelector(".woodblocks__question");
  const answer = document.querySelector(".woodblocks__answer");
  const arrow = document.querySelector(".woodblocks__question__arrow");

  if (question && answer && arrow) {
    question.addEventListener("click", () => {
      // Toggle display of the answer
      if (answer.style.display === "block") {
        answer.style.display = "none"; // Close the answer
        arrow.classList.remove("woodblocks__question__arrow--open");
        arrow.classList.add("woodblocks__question__arrow--close");
      } else {
        answer.style.display = "block"; // Open the answer
        arrow.classList.remove("woodblocks__question__arrow--close");
        arrow.classList.add("woodblocks__question__arrow--open");
      }
    });
  }
};

if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion

      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true // Use capture mode
  );
}
const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  const container = document.querySelector(".comics__options");

  if (container) {
    const maxMovement = window.innerWidth / 2;
    const movement = Math.max(-maxMovement, Math.min(leftToRight * 2, maxMovement));
    container.style.transform = `translateX(${movement}px)`;
    container.style.transition = "transform 0.1s ease";
  }

  console.log("FrontToBack (beta):", frontToBack);
  console.log("LeftToRight (gamma):", leftToRight);
  console.log("RotateDegrees (alpha):", rotateDegrees);
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
  bibleStamps();
  woodBlock();
  // dateIcon();
  toggleAnswer();
}



init();