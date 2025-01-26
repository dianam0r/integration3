// sign form
const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;
const $submit = document.querySelector('.biblia__submit');

// menu
const $navButton = document.querySelector('.nav__buttons__icons');
const $navList = document.querySelector('.header__nav__list');
const $iconLink = document.querySelector('#iconlink');
const $menuClosedIcon = document.querySelector('.icons__closed');
const $menuOpenIcon = document.querySelector('.icons__opened');
const $menuWoodblock = document.querySelector('#nav__list li:nth-child(2) a');
const $menuOctomissae = document.querySelector('#nav__list li:nth-child(3) a');
const $menuBiblia = document.querySelector('#nav__list li:nth-child(1) a');
const $headerNav = document.querySelector('.header__nav')

//tilting woodblocks
const container = document.querySelector(".comics__options");
const options = document.querySelectorAll(".comics__options img");
const optionsTilt = document.querySelectorAll('.comics__options li');
const centerX = window.innerWidth / 2;
const resultsTitle = document.querySelector(".comics__results__title");
const resultsP = document.querySelector(".comics__results__p");
let isTilting = false;


// drag music
const dragElement = document.querySelector(".grid_container__slider_line");


// slide
const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.querySelectorAll('.slide'));
const prevButton = carousel.querySelector('.carousel__button.prev');
const nextButton = carousel.querySelector('.carousel__button.next');
let currentIndex = 0;

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

        $menuBiblia.addEventListener('click', () => {
          closeNavigation();
        })

        $menuWoodblock.addEventListener('click', () => {
          closeNavigation();
          document.querySelector(".biblia__pages__second_page").style.display = "block";
          // document.querySelector(".biblia__submit").style.display = "none";
          document.querySelector(".after__biblia").style.display = "block";
          woodBlock();
          timeline();
          // dateIcon();
          toggleAnswer();
          tilting();
          musicSheetAppear();
          slideLearn();
          gsap.to(window, { duration: 1, scrollTo: "#woodblock" });
        })

        $menuOctomissae.addEventListener('click', () => {
          closeNavigation();
          document.querySelector(".biblia__pages__second_page").style.display = "block";
          // document.querySelector(".biblia__submit").style.display = "none";
          document.querySelector(".after__biblia").style.display = "block";
          woodBlock();
          timeline();
          // dateIcon();
          toggleAnswer();
          tilting();
          musicSheetAppear();
          slideLearn();
          gsap.to(window, { duration: 1, scrollTo: "#octomissae" });
        })

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
  $navList.classList.add("nav__list--styling");
  $menuOpenIcon.classList.remove("hidden");
  $menuClosedIcon.classList.add("hidden");
  $headerNav.classList.add("background_color");
};


const closeNavigation = () => {
  $navButton.setAttribute("aria-expanded", "false");
  $iconLink.setAttribute("xlink:href", "#navicon");
  $navList.classList.remove("nav__list--styling");
  $navList.classList.add("hidden");
  $menuOpenIcon.classList.add("hidden");
  $menuClosedIcon.classList.remove("hidden");
  $headerNav.classList.remove("background_color");
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
            trigger: ".intro__grid__intro",
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
        const messages = gsap.utils.toArray(".messaging__messages > div");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".messaging__messages",
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
        const messages = gsap.utils.toArray(".messaging__messages > div");
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
            trigger: ".messaging__messages",
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
    [".biblia__photos__biblia_icon", ".biblia__photos__octo_icon", ".biblia__photos__location_icon"],
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power1.out", stagger: 0.5 }
  ).fromTo(
    [".biblia__photos__biblia_icon", ".biblia__photos__octo_icon", ".biblia__photos__location_icon"],
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
  document.querySelector(".biblia__submit__write").style.display = "none";
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
    document.querySelector(".biblia__pages__second_page").style.display = "none";
    document.querySelector(".biblia__submit").style.display = "none";
    document.querySelector(".biblia__submit__write").style.display = "block";
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
            document.querySelector(".biblia__pages__second_page").style.display = "block";
            document.querySelector(".biblia__submit").style.display = "none";
            document.querySelector(".after__biblia").style.display = "block";
            woodBlock();
            timeline();
            // dateIcon();
            toggleAnswer();
            tilting();
            musicSheetAppear();
            slideLearn();
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
            document.querySelector(".biblia__pages__second_page").style.display = "block";
            document.querySelector(".biblia__submit").style.display = "none";
            document.querySelector(".biblia__phone").style.display = "flex";
            document.querySelector(".biblia__pages").classList.add("relative_pages");
            document.querySelector(".biblia__pages__first_page").classList.add("absolute");
            document.querySelector(".biblia__pages__second_page").classList.add("absolute_second_page");
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
      trigger: ".biblia__pages__second_page",
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
  document.querySelectorAll(".clicking_portrait__hand, .clicking_portrait__g_woodblock, .clicking_portrait__click_icon")
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
          ".g_woodblock__flex",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            onStart: () => {
              document.querySelector(".g_woodblock__flex").style.display = "flex";
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
      trigger: ".g_woodblock__flex",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
    },
  })
    .fromTo(
      ".g_woodblock__flex",
      { y: 0, scale: 1, opacity: 1 },
      { y: "+=460", scale: 1.8, rotation: 365, duration: 1, ease: "power1.out" }
    )
    .fromTo(
      ".g_woodblock__flex",
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
  const question = document.querySelector(".woodblocks__question__text");
  const answer = document.querySelector(".woodblocks__question__answer");
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
  update();
  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      (event) => {
        const leftToRight = event.gamma;
        const frontToBack = event.beta;
        const twist = event.alpha;
        handleOrientationEvent(leftToRight, frontToBack, twist);
      },
      true
    );
  }
};

const update = () => {
  optionsTilt.forEach((option, index) => {
    option.style.display = index === currentIndex ? 'block' : 'none';
  });
  checkOptionContent();
};

const next = () => {
  currentIndex = (currentIndex + 1) % optionsTilt.length;
  update();
};

const prev = () => {
  currentIndex = (currentIndex - 1 + optionsTilt.length) % optionsTilt.length;
  update();
};

const handleOrientationEvent = (leftToRight, frontToBack, twist) => {
  if (!isTilting) {
    if (leftToRight > 15 && frontToBack >= 90 && frontToBack <= 105 && twist < 308 && twist > 270) {
      console.log("left");
      isTilting = true;
      prev();
    } else if (leftToRight < -15 && frontToBack >= 90 && frontToBack <= 108 && twist > 86 && twist < 109) {
      console.log("right");
      isTilting = true;
      next();
    }
  }

  if (Math.abs(leftToRight) < 5 && Math.abs(frontToBack - 90) < 5 && Math.abs(twist) < 5) {
    isTilting = false;
  }
};

const checkOptionContent = () => {
  const currentOption = optionsTilt[currentIndex];
  if (currentOption.classList.contains('comics__options__1')) {
    resultsTitle.textContent = "Not Nature...";
    resultsP.textContent = "";
  } else if (currentOption.classList.contains('comics__options__2')) {
    resultsTitle.textContent = "Long People Yes!";
    resultsP.textContent = "These figures are proportioned with more than the usual 7 heads, just like superheroes in comics. This exaggeration makes them appear larger, stronger, and more powerful.";
  } else if (currentOption.classList.contains('comics__options__3')) {
    resultsTitle.textContent = "G for good try but no";
    resultsP.textContent = "";
  } else if (currentOption.classList.contains('comics__options__4')) {
    resultsTitle.textContent = "Not Exactly...";
    resultsP.textContent = "";
  }
};


const dragWoodblock = () => {
  document.querySelectorAll(".comics__options__1, .comics__options__2, .comics__options__3, .comics__options__4").forEach(option => {
    const rect = option.getBoundingClientRect();
    option.dataset.originalX = rect.left;
    option.dataset.originalY = rect.top;
  });

  Draggable.create(".comics__options__1, .comics__options__2, .comics__options__3, .comics__options__4", {
    bounds: ".comics__options",
    type: "x,y",
    onDragEnd: function () {
      const squareRect = document.querySelector(".comics__options__square").getBoundingClientRect();
      const draggedRect = this.target.getBoundingClientRect();


      const isInside = (
        draggedRect.left >= squareRect.left &&
        draggedRect.right <= squareRect.right &&
        draggedRect.top >= squareRect.top &&
        draggedRect.bottom <= squareRect.bottom
      );

      // document.querySelectorAll(".comics__options__1, .comics__options__2, .comics__options__3, .comics__options__4").forEach(option => {
      //   if (option !== this.target) {
      //     option.style.transform = `translate(0, 0)`;
      //   }
      // });

      if (!isInside) {
        console.log("out")
        resultsTitle.textContent = "";
        resultsP.textContent = "";
      } else {


        if (isInside) {
          if (this.target.classList.contains("comics__options__1")) {
            console.log("1");
            resultsTitle.textContent = "Not Nature...";
            resultsP.textContent = "";
          } else if (this.target.classList.contains("comics__options__2")) {
            console.log("2");
            resultsTitle.textContent = "Long People Yes!";
            resultsP.textContent = "These figures are proportioned with more than the usual 7 heads, just like superheroes in comics. This exaggeration makes them appear larger, stronger, and more powerful.";
          } else if (this.target.classList.contains("comics__options__3")) {
            console.log("3");
            resultsTitle.textContent = "G for good try but try again.";
            resultsP.textContent = "";
          } else if (this.target.classList.contains("comics__options__4")) {
            console.log("4");
            resultsTitle.textContent = "Not Exactly...";
            resultsP.textContent = "";
          }
        } else {
          console.log("out");
          resultsTitle.textContent = "";
          resultsP.textContent = "";
        }
      }

    }
  });
};

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
  const dragElement = document.querySelector(".grid_container__slider_line");
  const container1 = document.querySelector(".grid");
  const imageElement = document.querySelector(".grid_container__new.slider-image");
  const imageElement2 = document.querySelector(".grid_container__old.slider-image");

  Draggable.create(".grid_container__slider_line", {
    type: "x",
    bounds: (".grid"),
    onDrag: function () {
      const dragLocation = dragElement.getBoundingClientRect();
      const container1Location = container1.getBoundingClientRect();

      // Calculate relativeX
      const relativeX = dragLocation.left + dragLocation.width / 2 - container1Location.left;

      // Calculate the percentage of the container width
      const containerWidth = container1.offsetWidth;
      const visiblePercentage = Math.max(0, Math.min(1, relativeX / containerWidth)) * 100;

      // Update the clip-path for the first image
      imageElement.style.clipPath = `inset(0 ${100 - visiblePercentage}% 0 0)`;

      // Update the clip-path for the second image (reverse effect)
      imageElement2.style.clipPath = `inset(0 0 0 ${visiblePercentage}%)`;
    }
  });
};



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

let insideCount = 0;

const dragPhone = () => {
  Draggable.create(".biblia__pages__second_page, .biblia__pages__first_page", {
    bounds: ".biblia__phone",
    type: "x,y",
    edgeResistance: 0.65,
    onDragEnd: function () {
      const phoneRect = document.querySelector(".biblia__phone").getBoundingClientRect();
      const draggedRect = this.target.getBoundingClientRect();


      const isInside =
        draggedRect.bottom >= phoneRect.bottom &&
        draggedRect.left > phoneRect.left;

      if (!isInside) {
      } else {
        gsap.to(this.target, { scale: 0, duration: 0.5 });
        insideCount++;

        if (insideCount === 2) {
          document.querySelector(".after__biblia").style.display = "block";
          document.querySelector(".biblia__phone").style.display = "none";
          document.querySelector(".biblia__pages").classList.remove("relative_pages");
          woodBlock();
          dragWoodblock();
          // dateIcon();
          musicSheetAppear();
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
  dragMusic();
};

init();
