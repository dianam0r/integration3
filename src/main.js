// // sign form
const $canvas = document.getElementById("signatureCanvas");
const ctx = $canvas.getContext("2d");
let isDrawing = false;
let hasDrawing = false;
const $submit = document.querySelector('.biblia__submit');
const $bibliaPages = document.querySelector('.biblia__pages');
const $bibliaPhone = document.querySelector('.biblia__phone');
const $bibliaWrite = document.querySelector('.biblia__submit__write');
const $retry = document.querySelector('.biblia__retry');

// menu
const $navButton = document.querySelector('.nav__buttons__icons');
const $navList = document.querySelector('.header__nav__list');
const $menuBiblia = document.querySelector('#nav__list li:nth-child(1) a');
const $menuWoodblock = document.querySelector('#nav__list li:nth-child(2) a');
const $bibliaSecond = document.querySelector('.biblia__pages__second_page');
const $bibliaFirst = document.querySelector('.biblia__pages__first_page');

const $woodblockArticle = document.querySelector('.woodblock_article');
const $musicArticle = document.querySelector('.music_article');
const $endSection = document.querySelector('.end_section');

const $iconLink = document.querySelector('#iconlink');
const $menuClosedIcon = document.querySelector('.icons__closed');
const $menuOpenIcon = document.querySelector('.icons__opened');
const $menuOctomissae = document.querySelector('#nav__list li:nth-child(3) a');
const $headerNav = document.querySelector('.header__nav')

// messages
const messages = gsap.utils.toArray(".messaging__messages > div");

// //tilting woodblocks
const $optionsTilt = document.querySelectorAll('.comics__options__grid li');
const $resultsTitle = document.querySelector(".comics__results__title");
const $resultsP = document.querySelector(".comics__results__p");
 let isTilting = false;

// // drag music
const $dragElement = document.querySelector(".music__grid_container__slider_line");

// // slide
const $carousel = document.querySelector('.learn__carousel');
const $slides = Array.from($carousel.querySelectorAll('.slide'));
let insideCount = 0;
const prevButton = $carousel.querySelector('.carousel__button.prev');
const nextButton = $carousel.querySelector('.carousel__button.next');

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
          $bibliaSecond.classList.remove("hidden");
          $woodblockArticle.classList.remove("hidden");
          $musicArticle.classList.remove("hidden");
          $endSection.classList.remove("hidden");
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
          $bibliaSecond.classList.remove("hidden");
          $woodblockArticle.classList.remove("hidden");
          $musicArticle.classList.remove("hidden");
          $endSection.classList.remove("hidden");
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

// const intro = (mm) => {
//   // mm.add(
//   //   {
//   //     isDesktop: "(min-width: 1024px)",
//   //     isMobile: "(min-width: 300px)"
//   //   },
//   //   (context) => {
//   //     let { isMobile, isDesktop } = context.conditions;

//   //     if (isMobile) {
//   //       const tl = gsap.timeline({
//   //         scrollTrigger: {
//   //           trigger: ".intro__grid__intro",
//   //           start: "top 10%",
//   //           end: "+=500",
//   //           pin: ".intro__grid",
//   //           scrub: true,
//   //         },
//   //       });

//   //       tl.fromTo(".intro__flex, .intro__scroll_div", {
//   //         opacity: 1
//   //       },
//   //         {
//   //           opacity: 0,
//   //           duration: 1,
//   //           ease: "power1.out"
//   //         });

//   //       tl.fromTo(
//   //         ".stroll",
//   //         { opacity: 0 },
//   //         { opacity: 1, duration: 5, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(
//   //         ".intro__plantin",
//   //         { marginBottom: "20px", y: 0 },
//   //         { marginBottom: 0, y: -300, duration: 1, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(".stroll", { opacity: 1 }, { opacity: 0, duration: 1, ease: "power1.out" });

//   //       tl.fromTo(
//   //         ".hello_there",
//   //         { opacity: 0 },
//   //         { opacity: 1, duration: 1, ease: "power1.out" }
//   //       );

//   //       tl.fromTo(
//   //         ".intro__plantin__writing_icon, .intro__plantin__post_it",
//   //         { opacity: 1 },
//   //         { opacity: 0, duration: 1, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(
//   //         ".intro__plantin",
//   //         { x: 0 },
//   //         { x: -20, duration: 1, ease: "power1.out" },
//   //         "<"
//   //       );

//   //     }

//   //     if (isDesktop) {
//   //       const tl = gsap.timeline({
//   //         scrollTrigger: {
//   //           trigger: ".intro__grid",
//   //           start: "top 10%",
//   //           end: "+=600",
//   //           pin: ".intro__grid",
//   //           scrub: true,
//   //         },
//   //       });

//   //       tl.fromTo(".intro__flex, .intro__scroll_div", {
//   //         opacity: 1
//   //       },
//   //         {
//   //           opacity: 0,
//   //           duration: 1,
//   //           ease: "power1.out"
//   //         });

//   //       tl.fromTo(
//   //         ".intro__plantin__post_it, .intro__plantin__book_icon, .intro__plantin__writing_icon",
//   //         { opacity: 0 },
//   //         { opacity: 1, duration: 5, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(
//   //         ".stroll",
//   //         { opacity: 0 },
//   //         { opacity: 1, duration: 5, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(
//   //         ".intro__plantin",
//   //         { y: "0%" },
//   //         { y: "5vh", duration: 5, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(".stroll", { opacity: 1 }, { opacity: 0, duration: 1, ease: "power1.out" });

//   //       tl.fromTo(
//   //         ".intro__plantin",
//   //         { x: 0 },
//   //         { x: "20vw", duration: 1, ease: "power1.out" },
//   //         "<"
//   //       );

//   //       tl.fromTo(
//   //         ".intro__plantin__post_it, .intro__plantin__book_icon, .intro__plantin__writing_icon",
//   //         { opacity: 1 },
//   //         { opacity: 0, duration: 1, ease: "power1.out" },
//   //         "<"
//   //       );

//   //     }


//   //     return;
//   //   }
//   // );
//   slideIntro();

// };


const prevButtonIntro = document.querySelector('.intro__grid__prev');
const nextButtonIntro = document.querySelector('.intro__grid__next');
const $introGroup = document.querySelector('.intro__grid');
const $intros = Array.from($introGroup.querySelectorAll('.slide_intro'));


const intro = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro__grid",
      start: "top 10%",
      end: "+=600",
      pin: ".intro__grid",
      scrub: true,
      onUpdate: (self) => {
        const progressIndex = Math.round(self.progress * ($intros.length - 1));
        if (progressIndex !== currentIndex) {
          currentIndex = progressIndex;
          updateIntro();

          if (currentIndex === 1) {
            tl.fromTo(
              ".intro__plantin",
              { y: "0%" },
              { y: "5vh", duration: 5, ease: "power1.out" },
              "<"
            );
          } else if (currentIndex === 2) {
            tl.fromTo(
              ".intro__plantin",
              { x: 0 },
              { x: "20vw", duration: 1, ease: "power1.out" },
              "<"
            );
          }
        }
      },
    },
  });
};

const updateIntro = () => {
  $intros.forEach((intro, index) => {
    intro.style.display = index === currentIndex ? 'block' : 'none';
  });
}

const nextIntro = () => {
  currentIndex = (currentIndex + 1) % $intros.length;
  updateIntro();
}

const prevIntro = () => {
  currentIndex = (currentIndex - 1 + $intros.length) % $intros.length;
  updateIntro();
}





const showMessages = (mm) => {

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
        const plantin = document.querySelector(".messaging__plantin");

        const plantinTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".messaging",
            start: "top 50%",
            end: "+=30vh",
            scrub: 1,
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
  $canvas.addEventListener("mousedown", startDrawing);
  $canvas.addEventListener("mousemove", draw);
  $canvas.addEventListener("mouseup", stopDrawing);
  $canvas.addEventListener("mouseout", stopDrawing);
  $canvas.addEventListener("touchstart", startDrawing);
  $canvas.addEventListener("touchmove", draw);
  $canvas.addEventListener("touchend", stopDrawing);
  submit(mm);
}

const startDrawing = (event) => {
  isDrawing = true;
  hasDrawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
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
    const rect = $canvas.getBoundingClientRect();
    return event.touches[0].clientX - rect.left;
  }
  return event.offsetX;
}

const getY = (event) => {
  if (event.type.includes("touch")) {
    const rect = $canvas.getBoundingClientRect();
    return event.touches[0].clientY - rect.top;
  }
  return event.offsetY;
}

const clearForm = () => {
  
  const $clearButton = document.getElementById("clearButton");

  $retry.classList.remove("hidden");
  $submit.classList.remove("hidden");
  $bibliaWrite.classList.add("hidden")

  $clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    hasDrawing = false;
    $submit.classList.add("hidden");
    $bibliaWrite.classList.remove("hidden");
    $retry.classList.add("hidden");
  });
}

const submit = (mm) => {
  const $signatureForm = document.getElementById("signatureForm");
  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(min-width: 300px) and (max-width:450px)"
    },
    (context) => {
      let { isMobile, isDesktop } = context.conditions;

      if (isMobile) {
        $signatureForm.addEventListener("submit", (event) => {
          if (!hasDrawing) {
            alert("You must sign before submitting the form.");
            event.preventDefault();
          } else {
            $bibliaSecond.classList.remove("hidden");
            $submit.classList.add("hidden");
            $woodblockArticle.classList.remove("hidden");
            $musicArticle.classList.remove("hidden");
            $endSection.classList.remove("hidden");
            woodBlock();
            timeline();
            dateIcon();
            toggleAnswer();
            tilting();
            musicSheetAppear();
            slideLearn();
            event.preventDefault();
          }
        });
      }

      if (isDesktop) {

        $signatureForm.addEventListener("submit", (event) => {
          if (!hasDrawing) {
            alert("You must sign before submitting the form.");
            event.preventDefault();
          } else {
            $bibliaSecond.classList.remove("hidden");
            $submit.classList.add("hidden");
            $bibliaSecond.classList.add("absolute_second_page");
            $bibliaPhone.classList.remove("hidden");
            $bibliaPages.classList.add("relative_pages");
            $bibliaFirst.classList.add("absolute");
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
  const $portraitWoodblock = document.querySelectorAll(".clicking_portrait__hand, .clicking_portrait__g_woodblock, .clicking_portrait__click_icon");
 
  $portraitWoodblock.forEach(element => {
    element.addEventListener("click", () => {
      const timeline = gsap.timeline();

      timeline.fromTo(
        ".clicking_portrait__g_woodblock",
        { rotation: 0, x: 0, y: 0, opacity: 1 },
        {
          rotation: 360,
          x: "10px", 
          y: "-10px",
          yoyo: true, 
          repeat:1,
          duration: 1,
          ease: "power1.out",
        }
      );
      timeline.add(() => {
        document.querySelector(".woodblocks").classList.remove("hidden");
        document.querySelector(".comics").classList.remove("hidden");
        document.querySelector(".timeline").classList.remove("hidden");
        $musicArticle.classList.remove("hidden");
        $endSection.classList.remove("hidden");
        fallingWoodblock();
        // dateIcon();
        musicSheetAppear();
      });
    });
  });

  
}

const fallingWoodblock = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".woodblocks__first_text",
      start: "top 80%",
      end: "bottom 40%",
      scrub: true,
    },
  })
    .fromTo(
      ".clicking_portrait__g_woodblock",
      { y: 0, scale: 1, x:0 },
      { y: "+=800", scale: 0.8,x:"10vw", rotation: 365, duration: 1, ease: "power1.out" }
    )
    .fromTo(
      ".clicking_portrait__g_woodblock",
      { opacity: 1 },
      { opacity: 0, duration: 0.2, ease: "power1.out" }
    )
    .fromTo(
      ".g__grid__g",
      { opacity: 0 },
      { opacity: 1, duration: 0.2, ease: "power1.out" },
      "-=0.3"
    );
};

const toggleAnswer = () => {
  const $question = document.querySelector(".woodblocks__question__text");
  const $answer = document.querySelector(".woodblocks__question__answer");
  const $arrow = document.querySelector(".woodblocks__question__arrow");

  if ($question && $answer && $arrow) {
    $question.addEventListener("click", () => {
      if ($answer.style.display === "block") {
        $answer.classList.add("hidden");
        $arrow.classList.remove("woodblocks__question__arrow--open");
        $arrow.classList.add("woodblocks__question__arrow--close");
      } else {
        $answer.classList.add("block");
        $arrow.classList.remove("woodblocks__question__arrow--close");
        $arrow.classList.add("woodblocks__question__arrow--open");
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
  $optionsTilt.forEach((option, index) => {
    option.style.display = index === currentIndex ? 'block' : 'none';
  });
  checkOptionContent();
};

const next = () => {
  currentIndex = (currentIndex + 1) % $optionsTilt.length;
  update();
};

const prev = () => {
  currentIndex = (currentIndex - 1 + $optionsTilt.length) % $optionsTilt.length;
  update();
};

const handleOrientationEvent = (leftToRight, frontToBack, twist) => {
  if (!isTilting) {
    if (leftToRight > 15 && frontToBack >= 90 && frontToBack <= 105 && twist < 308 && twist > 270) {
      isTilting = true;
      prev();
    } else if (leftToRight < -15 && frontToBack >= 90 && frontToBack <= 108 && twist > 86 && twist < 109) {
      isTilting = true;
      next();
    }
  }

  if (Math.abs(leftToRight) < 5 && Math.abs(frontToBack - 90) < 5 && Math.abs(twist) < 5) {
    isTilting = false;
  }
};

const checkOptionContent = () => {
  const currentOption = $optionsTilt[currentIndex];
  if (currentOption.classList.contains('comics__options__1')) {
    $resultsTitle.textContent = "Not Nature...";
    $resultsP.textContent = "";
  } else if (currentOption.classList.contains('comics__options__2')) {
    $resultsTitle.textContent = "Long People Yes!";
    $resultsP.textContent = "These figures are proportioned with more than the usual 7 heads, just like superheroes in comics. This exaggeration makes them appear larger, stronger, and more powerful.";
  } else if (currentOption.classList.contains('comics__options__3')) {
    $resultsTitle.textContent = "G for good try but no";
    $resultsP.textContent = "";
  } else if (currentOption.classList.contains('comics__options__4')) {
    $resultsTitle.textContent = "Not Exactly...";
    $resultsP.textContent = "";
  }
};

const dragWoodblock = () => {

  document.querySelectorAll('.comics__options__1,.comics__options__2,.comics__options__3,.comics__options__4').forEach(option => {
    const rect = option.getBoundingClientRect();
    option.dataset.originalX = rect.left;
    option.dataset.originalY = rect.top;
    console.log(rect)
  });

  Draggable.create('.comics__options__1,.comics__options__2,.comics__options__3,.comics__options__4', {
    bounds: ".comics",
    type: "x,y",
    onDragEnd: function () {
      const $squareRect = document.querySelector(".comics__options__grid__square").getBoundingClientRect();
      const draggedRect = this.target.getBoundingClientRect();

      const isInside = (
        draggedRect.left >= $squareRect.left &&
        draggedRect.right <= $squareRect.right &&
        draggedRect.top >= $squareRect.top &&
        draggedRect.bottom <= $squareRect.bottom
      );


      document.querySelectorAll(".comics__options__1, .comics__options__2, .comics__options__3, .comics__options__4").forEach(option => {
        if (option !== this.target) {
          option.style.transform = `translate(0, 0)`;
        }
      });

      if (!isInside) {
        $resultsTitle.textContent = "";
        $resultsP.textContent = "";
      } else {


        if (isInside) {
          if (this.target.classList.contains("comics__options__1")) {
         
            $resultsTitle.textContent = "Not Nature...";
            $resultsP.textContent = "";
          } else if (this.target.classList.contains("comics__options__2")) {
            
            $resultsTitle.textContent = "Long People Yes!";
            $resultsP.textContent = "These figures are proportioned with more than the usual 7 heads, just like superheroes in comics. This exaggeration makes them appear larger, stronger, and more powerful.";
          } else if (this.target.classList.contains("comics__options__3")) {
           
            $resultsTitle.textContent = "G for good try but try again.";
            $resultsP.textContent = "";
          } else if (this.target.classList.contains("comics__options__4")) {
          
            $resultsTitle.textContent = "Not Exactly...";
            $resultsP.textContent = "";
          }
        } else {
          
          $resultsTitle.textContent = "";
          $resultsP.textContent = "";
        }
      }

    }
  });
};

const timeline = () => {
  const $timeline = document.querySelector(".timeline__line");
  const timelineWidth = $timeline.offsetWidth;
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
  const $begginingMusic = document.querySelector(".beggining_music__music_sheet");
  const musicWidth = $begginingMusic.offsetWidth;
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
  const container1 = document.querySelector(".music__grid__container");
  const $newMusic = document.querySelector(".music__grid__container__new.slider-image");
  const $oldMusic = document.querySelector(".music__grid__container__old.slider-image");

  Draggable.create($dragElement, {
    type: "x",
    bounds: ".music__grid__container",
    onDrag: function () {
      const dragLocation = $dragElement.getBoundingClientRect();
      const container1Location = container1.getBoundingClientRect();

      const relativeX =
        dragLocation.left - container1Location.left + dragLocation.width / 2;

      const containerWidth = container1.offsetWidth;

      const scalingFactor = (containerWidth / 1027) * 84;

      const visiblePercentage = (relativeX / containerWidth) * scalingFactor;

      $newMusic.style.clipPath = `inset(0 ${100 - visiblePercentage}% 0 0)`;
      $oldMusic.style.clipPath = `inset(0 0 0 ${visiblePercentage}%)`;

     
    },
  });
};



const slideLearn = () => {
  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);
  updateSlide();
}

const updateSlide = () => {
  $slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? 'block' : 'none';
  });
}

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % $slides.length;
  updateSlide();
}

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
  updateSlide();
}

const dragPhone = () => {
  Draggable.create([$bibliaSecond, $bibliaFirst], {
    bounds: ".biblia__phone",
    type: "x,y",
    edgeResistance: 0.65,
    onDragEnd: function () {

      const phoneRect = $bibliaPhone.getBoundingClientRect();
      const draggedRect = this.target.getBoundingClientRect();

     

      const isInside =
        draggedRect.bottom > phoneRect.bottom &&
        draggedRect.left > phoneRect.left &&
        draggedRect.top < phoneRect.top &&
        draggedRect.right < phoneRect.right;


      if (!isInside) {
      } else {
        gsap.to(this.target, { scale: 0, duration: 0.5 });
        insideCount++;

        if (insideCount === 2) {
          $woodblockArticle.classList.remove("hidden");
          $bibliaPhone.classList.add("hidden")
          $bibliaPages.classList.remove("relative_pages");
          woodBlock();
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
  dragWoodblock();
  dragMusic();
};

init();
