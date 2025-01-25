// sign form
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;

// menu
const $navButton = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__list');
const $iconLink = document.querySelector('#iconlink');

// drag music
// const canvasDrag = document.getElementById("canvasDrag");
// const ctxDrag = canvasDrag.getContext("2d");
// const dragElement = document.querySelector(".dragElement");

// instead of src with array is metalink imgs in the public
// const img1 = new Image();
// const img2 = new Image();

// slide
// const carousel = document.querySelector('.carousel');
// const slides = Array.from(carousel.querySelectorAll('.slide'));
// const prevButton = carousel.querySelector('.carousel__button.prev');
// const nextButton = carousel.querySelector('.carousel__button.next');
// let currentIndex = 0;

const menu = (mm) => {

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(min-width: 300px)"
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;

      if (isMobile) {

        $navButton.classList.remove('hidden');
        $navList.classList.add("hidden");

        $navButton.addEventListener("click", toggleNavigation);

        window.addEventListener("keyup", (e) => {
          if (e.key === "Escape") {
            $navButton.focus();
            closeNavigation();
          }
        });
      }

      if (isDesktop) {

        $navButton.classList.add('hidden');
        $navList.classList.remove("hidden");

        $navButton.removeEventListener("click", toggleNavigation);
      }

      return;
    }
  );

};

const openNavigation = () => {
  $navButton.setAttribute("aria-expanded", "true");
  $iconLink.setAttribute("xlink:href", "#close");
  $navList.classList.remove("hidden");
};

const closeNavigation = () => {
  $navButton.setAttribute("aria-expanded", "false");
  $iconLink.setAttribute("xlink:href", "#navicon");
  $navList.classList.add("hidden");
};

const toggleNavigation = () => {
  const open = $navButton.getAttribute("aria-expanded");
  open === "false" ? openNavigation() : closeNavigation();
};


const intro = (mm) => {
  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(min-width: 300px)"
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;

      if (isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top 10%",
            end: "+=500",
            pin: ".intro__grid",
            scrub: true,
          },
        });

        tl.fromTo(".intro__flex, .intro__scroll_div", {
          opacity: 1
        },
          {
            opacity: 0,
            duration: 1,
            ease: "power1.out"
          });

        tl.fromTo(
          ".stroll",
          { opacity: 0 },
          { opacity: 1, duration: 5, ease: "power1.out" },
          "<"
        );

        tl.fromTo(
          ".intro__plantin",
          { marginBottom: "20px", y: 0 },
          { marginBottom: 0, y: -300, duration: 1, ease: "power1.out" },
          "<"
        );

        tl.fromTo(".stroll", { opacity: 1 }, { opacity: 0, duration: 1, ease: "power1.out" });

        tl.fromTo(
          ".hello_there",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1.out" }
        );

        tl.fromTo(
          ".intro__plantin__writing_icon, .intro__plantin__post_it",
          { opacity: 1 },
          { opacity: 0, duration: 1, ease: "power1.out" },
          "<"
        );

        tl.fromTo(
          ".intro__plantin",
          { x: 0 },
          { x: -20, duration: 1, ease: "power1.out" },
          "<"
        );

      }

      if (isDesktop) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".intro__grid",
            start: "top 10%",
            end: "+=600",
            pin: ".intro__grid",
            scrub: true,
          },
        });

        tl.fromTo(".intro__flex, .intro__scroll_div", {
          opacity: 1
        },
          {
            opacity: 0,
            duration: 1,
            ease: "power1.out"
          });

        tl.fromTo(
          ".intro__plantin__post_it, .intro__plantin__book_icon, .intro__plantin__writing_icon",
          { opacity: 0 },
          { opacity: 1, duration: 5, ease: "power1.out" },
          "<"
        );

        tl.fromTo(
          ".stroll",
          { opacity: 0 },
          { opacity: 1, duration: 5, ease: "power1.out" },
          "<"
        );

        tl.fromTo(
          ".intro__plantin",
          { y: "0%" },
          { y: "5vh", duration: 5, ease: "power1.out" },
          "<"
        );


        tl.fromTo(".stroll", { opacity: 1 }, { opacity: 0, duration: 1, ease: "power1.out" });


        tl.fromTo(
          ".hello_there",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1.out" }
        );

        tl.fromTo(
          ".intro__plantin",
          { x: 0 },
          { x: "20vw", duration: 1, ease: "power1.out" },
          "<"
        );

        tl.fromTo(
          ".intro__plantin__post_it, .intro__plantin__book_icon, .intro__plantin__writing_icon",
          { opacity: 1 },
          { opacity: 0, duration: 1, ease: "power1.out" },
          "<"
        );

      }


      return;
    }
  );


};

const showMessages = (mm) => {

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(min-width: 300px)"
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;

      if (isMobile) {
        const messages = gsap.utils.toArray(".messages > div");

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
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          );
        });
      }

      if (isDesktop) {
        const messages = gsap.utils.toArray(".messages > div");
        const plantin = document.querySelector(".messaging__plantin");

        const plantinTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".messaging",
            start: "top 50%",
            end: "+=30vh",
            scrub: 1,
            markers: true,
          },
        });

        plantinTl.fromTo(
          plantin,
          { x: "-100%" },
          { x: "0%", duration: 1, ease: "power1.out" }
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".messages",
            start: "top 50%",
            end: "bottom 70%",
            scrub: 1,
          },
        });

        messages.forEach((message, index) => {
          tl.fromTo(
            message,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
          )
            .to(
              plantin,
              { y: `+=${40 * (index + 1)}`, duration: 0.5, ease: "power1.out" },
              "<"
            );
        });
      }

      return;
    }
  );

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
    { opacity: 1, scale: 1, duration: 1.5, ease: "power1.out", stagger: 0.5 }
  ).fromTo(
    [".biblia__bibli_icon", ".biblia__octo_icon", ".biblia__location_icon"],
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8, duration: 1.5, ease: "power1.out", stagger: 0.5 }
  );
};

// form
const signForm = (mm) => {
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchend", stopDrawing);
  submit(mm);
}

const startDrawing = (event) => {
  isDrawing = true;
  hasDrawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  document.querySelector(".biblia__submit").style.display = "block";
  document.querySelector(".biblia__write").style.display = "none";
  clearForm();
}

const draw = (event) => {
  if (!isDrawing) return;

  ctx.lineTo(getX(event), getY(event));
  ctx.strokeStyle = "#BD2B54";
  ctx.lineWidth = 2;
  ctx.stroke();
  if (!hasDrawing) return;
}

const stopDrawing = () => {
  isDrawing = false;
  ctx.closePath();
}

const getX = (event) => {
  if (event.type.includes("touch")) {
    const rect = canvas.getBoundingClientRect();
    return event.touches[0].clientX - rect.left;
  }
  return event.offsetX;
}

const getY = (event) => {
  if (event.type.includes("touch")) {
    const rect = canvas.getBoundingClientRect();
    return event.touches[0].clientY - rect.top;
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

const submit = (mm) => {

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(min-width: 300px) and (max-width:450px)"
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;

      if (isMobile) {
        document.getElementById("signatureForm").addEventListener("submit", (event) => {
          if (!hasDrawing) {
            alert("You must sign before submitting the form.");
            event.preventDefault();
          } else {
            document.querySelector(".biblia__second_page").style.display = "block";
            document.querySelector(".biblia__submit").style.display = "none";
            document.querySelector(".after__biblia").style.display = "block";
            woodBlock();
            // timeline();
            // dateIcon();
            
            // musicSheetAppear();
            event.preventDefault();
          }
        });
      }

      if (isDesktop) {
        document.getElementById("signatureForm").addEventListener("submit", (event) => {
          if (!hasDrawing) {
            alert("You must sign before submitting the form.");
            event.preventDefault();
          } else {
            document.querySelector(".biblia__second_page").style.display = "block";
            document.querySelector(".biblia__submit").style.display = "none";
            document.querySelector(".biblia__phone").style.display = "flex";
            document.querySelector(".biblia__pages").classList.add("relative_pages");
            document.querySelector(".biblia__first_page").classList.add("absolute");
            document.querySelector(".biblia__second_page").classList.add("absolute_second_page");
            dragPhone();
            event.preventDefault();
          }
        });
      }

      return;
    }
  );
}

const dateIcon = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".biblia__second_page",
      start: "top 10%",
      end: "bottom 10%",
      scrub: true,
    },
  });

  tl.fromTo(
    ".conclusion_biblia__date_icon",
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power1.out" }
  ).fromTo(
    ".conclusion_biblia__date_icon",
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8, duration: 1.5, ease: "power1.out" }
  );
};

const woodBlock = () => {
  clickWoodblock();
  fallingWoodblock();
};

const clickWoodblock = () => {
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
}

const fallingWoodblock = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".g_woodblock2__flex",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
    },
  })
    .fromTo(
      ".g_woodblock2__flex",
      { y: 0, scale: 1, opacity: 1 },
      { y: "+=460", scale: 1.8, rotation: 365, duration: 1, ease: "power1.out" }
    )
    .fromTo(
      ".g_woodblock2__flex",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power1.out" }
    )
    .fromTo(
      ".grid__g",
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power1.out" },
      "-=0.3"
    );
};

const toggleAnswer = () => {
  const question = document.querySelector(".woodblocks__question");
  const answer = document.querySelector(".woodblocks__answer");
  const arrow = document.querySelector(".woodblocks__question__arrow");

  if (question && answer && arrow) {
    question.addEventListener("click", () => {
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

const tilting = () => {

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      (event) => {
        const leftToRight = event.gamma;
        handleOrientationEvent(leftToRight);
      },
      true
    );
  }
}

const handleOrientationEvent = (leftToRight) => {
  const container = document.querySelector(".comics__options");
  const options = document.querySelectorAll(".comics__options img");
  const centerX = window.innerWidth / 2;
  const resultsTitle = document.querySelector(".comics__results__title");
  const resultsP = document.querySelector(".comics__results__p");

  if (container) {
    const maxMovement = window.innerWidth * 4;
    let movement = leftToRight * 5;
    movement = Math.max(-maxMovement, Math.min(movement, maxMovement));
    container.style.transform = `translateX(${movement}px)`;
    container.style.transition = "transform 0.1s ease";
  }

  options.forEach((option) => {
    const optionRect = option.getBoundingClientRect();
    const optionCenterX = optionRect.left + optionRect.width / 2;

    if (Math.abs(centerX - optionCenterX) < 50) {
      if (option.classList.contains("comics__options__1")) {
        resultsTitle.textContent = "Not Exactly...";
        resultsP.textContent = "";
      } else if (option.classList.contains("comics__options__2")) {
        resultsTitle.textContent =
          "Exactly! "
        resultsP.textContent = " These figures are proportioned with more than the usual 7 heads, just like superheroes in comics. This exaggeration makes them appear larger, stronger, and more powerful.";
      } else if (option.classList.contains("comics__options__3")) {
        resultsTitle.textContent = "G for good try but try again.";
        resultsP.textContent = "";
      } else if (option.classList.contains("comics__options__4")) {
        resultsTitle.textContent = "Not Exactly...";
        resultsP.textContent = "";
      } else {
        resultsTitle.textContent = "";
        resultsP.textContent = "";
      }
    }
  });
}

const timeline = () => {
  const timeline = document.querySelector(".timeline__line");
  const timelineWidth = timeline.offsetWidth;
  const amountToScroll = timelineWidth - window.innerWidth;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 20%",
      end: "+=" + amountToScroll,
      pin: true,
      scrub: 1,
      pinSpacing: false
    },
  });

  tl.fromTo(
    ".timeline",
    { x: 0 },
    { x: -amountToScroll, duration: 20, ease: "none" }
  );
};

const musicSheetAppear = () => {
  const begginingMusic = document.querySelector(".beggining_music__music_sheet");
  const musicWidth = begginingMusic.offsetWidth;
  const amountToScroll = musicWidth - window.innerWidth;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".beggining_music",
      start: "top 20%",
      end: "+=" + amountToScroll,
      pin: true,
      scrub: 1,
    },
  });

  tl.fromTo(
    ".beggining_music",
    { x: 0 },
    { x: -amountToScroll, duration: 20, ease: "none" }
  );
};


const dragMusic = () => {
  img1.src = "./src/assets/trying_music.svg";
  img2.src = "./src/assets/music_old.svg";
  img1.onload = img2.onload = () => {
    overlayImages();
  };

  Draggable.create(".dragElement", {
    type: "x",
    bounds: canvasDrag,
    onDrag: function () {
      const dragLocation = dragElement.getBoundingClientRect();
      const canvasLocation = canvasDrag.getBoundingClientRect();
      const relativeX = dragLocation.left + dragLocation.width / 2 - canvasLocation.left;
      cutImages(relativeX);
    },
  });
}

const cutImages = (lineX) => {
  lineX = Math.max(0, Math.min(lineX, canvasDrag.width));

  ctxDrag.clearRect(0, 0, canvasDrag.width, canvasDrag.height);

  ctxDrag.save();
  ctxDrag.beginPath();
  ctxDrag.rect(0, 0, lineX, canvasDrag.height);
  ctxDrag.clip();

  ctxDrag.drawImage(img2, 0, 0, canvasDrag.width, canvasDrag.height);
  ctxDrag.restore();

  ctxDrag.save();
  ctxDrag.beginPath();
  ctxDrag.rect(lineX, 0, canvasDrag.width - lineX, canvasDrag.height);
  ctxDrag.clip();

  ctxDrag.drawImage(img1, 0, 0, canvasDrag.width, canvasDrag.height);
  ctxDrag.restore();
}

const overlayImages = () => {
  const initialLineX = canvasDrag.width / 2;
  cutImages(initialLineX);
}

const slideLearn = () => {
  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);
  updateSlide();
}

const updateSlide = () => {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? 'block' : 'none';
  });
}

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

let insideCount = 0; // Counter to track the number of times isInside is true

const dragPhone = () => {
  Draggable.create(".biblia__second_page, .biblia__first_page", {
    bounds: ".biblia__phone",
    type: "x,y",
    edgeResistance: 0.65,
    onDragEnd: function () {
      const phoneRect = document.querySelector(".biblia__phone").getBoundingClientRect();
      const draggedRect = this.target.getBoundingClientRect();
      console.log(phoneRect);
      console.log(draggedRect);

      const isInside =
        draggedRect.bottom >= phoneRect.bottom &&
        draggedRect.left > phoneRect.left;

      if (!isInside) {
        console.log("out");
      } else {
        gsap.to(this.target, { scale: 0, duration: 0.5 });
        insideCount++;

        if (insideCount === 2) {
          document.querySelector(".after__biblia").style.display = "block";
          document.querySelector(".biblia__phone").style.display = "none";
          document.querySelector(".biblia__pages").classList.remove("relative_pages");
          woodBlock();
          // timeline();
          // dateIcon();
          
          // musicSheetAppear();
        }
      }
    }
  });
};



const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Draggable);
  const mm = gsap.matchMedia();

  menu(mm);
  intro(mm);
  showMessages(mm);
  bibleStamps();
  signForm(mm);

  // toggleAnswer();
  // tilting();
  // dragMusic();
  // slideLearn();
};

init();
