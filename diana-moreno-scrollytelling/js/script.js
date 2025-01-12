const balanceSwingAnimation = () => {

  gsap.to(".header__title", {
    rotation: 3, 
    duration: 2, 
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });

  gsap.to(".header__title span", {
    rotation: -5, 
    duration: 2, 
    yoyo: true, 
    repeat: -1, 
    ease: "sine.inOut",
  });
};

const headMoving = () => {
  gsap.set(".header__head", {
    motionPath: {
      path: "#linePath",
      align: "#linePath",
      alignOrigin: [0.5, 0.5],
      start: 0,
    },
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".header__title",
      start: "top 14%",
      end: "+=1400",
      scrub: 1,
    },
  });

  tl.to(".header__head", {
    motionPath: {
      path: "#linePath",
      align: "#linePath",
      alignOrigin: [0.5, 0.5],
      start: 0,
      end: 0.3,
    },
    rotation: 30,
    duration: 8,
    ease: "power1.inOut",
  })
    .to(".header__head", {
      motionPath: {
        path: "#linePath",
        align: "#linePath",
        alignOrigin: [0.5, 0.5],
        start: 0.3,
        end: 0.6,
      },
      rotation: -30,
      duration: 15,
      ease: "power1.inOut",
    })
    .to(".header__head", {
      motionPath: {
        path: "#linePath",
        align: "#linePath",
        alignOrigin: [0.5, 0.5],
        start: 0.6,
        end: 1,
      },
      rotation: 15,
      duration: 8,
      ease: "power1.inOut",
    })

    .to(".school__timeline__years span:first-child", {
      opacity: 1,
      duration: 8,
    })

    .to(".header__yellow_blob", {
      x: "-20vw",
      y: "50vh",
      duration: 6,
    })
    .to(".yellow_blob", {
      scale: 10,
      transformOrigin: "center center",
      duration: 2,
    })
    .to(".header__yellow_blob", {
      scale: 10,
      transformOrigin: "center center",
      duration: 2,
    }, "<")
    .to(".school__text", {
      opacity: 1,
      duration: 2,
    });
};

const introText = () => {
  gsap.fromTo(".intro__text",{ opacity: 0 }, 
    {opacity: 1, 
      duration: 1.5,
      scrollTrigger: {
        trigger: ".intro__text", 
        start: "top 80%",
        end: "top 20%", 
      },
    }
  );
}



const rainAndPileUp = () => {

  const elements = [
    ".clothes__dress",
    ".clothes__tshirt",
    ".clothes__short",
    ".clothes__skirt",
  ];

  gsap.set(elements, {
    y: -200, 
    opacity: 0,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".school__text",
      start: "top 40%",
      end: "bottom 10%",
      scrub: 1,
    },
  });
  tl.to(elements, {
      y: "100vh", 
      opacity: 1, 
      stagger: 0.2, 
      duration: 2,
      ease: "power2.out", 
    })
  tl.to(elements, {
      y: "70vh", 
      rotation: () => Math.random() * 360, 
      duration: 2,
    });
};

const textSchool = () => {

  const spans = document.querySelectorAll(".school__text__p span:not(:first-child)");

  gsap.set(spans, {
    y: -20,
    opacity: 0, 
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".school__text__p", 
      start: "top 80%", 
      end: "bottom 50%", 
      scrub: 1, 
    },
  })
  tl.to(spans, {
    y: 0, 
    opacity: 1, 
    stagger: 0.2, 
    duration: 0.5,
    ease: "power1.out", 
  });
};

const parentsBanner = () => {
  const container2 = document.querySelector(".banner__words");
  const container2Width = container2.offsetWidth;
  const amountToScroll = container2Width - window.innerWidth;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".school__text__banner",
      start: "top 20%",
      end: "+=" + amountToScroll,
      pin: true,
      scrub: 1,
    },
  });

  tl.fromTo(
    ".banner__words",
    {
      width: "0%",
      opacity: 0, 
    },
    {
      width: "140%",
      opacity: 1, 
      duration: 1.5, 
      ease: "power2.out",
    }
  )
    .to(".banner__words", {
      width: "300%",
      duration: 20,
      ease: "power1.inOut",
    })
    .to(
      ".banner__words",
      {
        x: -amountToScroll,
        duration: 20, 
        ease: "none",
        color: "white",
      },
      "<" 
    )
    .to(".banner__words", {
      opacity: 0.4,
      duration: 4,
      ease: "power1.out",
      
    })
    .to(".banner__words__yes_banner", {
      opacity: 1,
      duration: 10,
      ease: "power1.out",
    });
};


const cardEsc = () => {
  gsap.to(".grid__card_esc", {
    rotation: 0,
    x: "-30vw",
    duration: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".grid__card_esc",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
    },
  });
};

const cardHq = () => {
  gsap.to(".grid__card_hq", {
    rotation: 5,
    x: "29vw",
    y: "-40vh",
    duration: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".grid__card_esc",
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });
};

const cardSearch = () => {
  gsap.to(".grid__card_search", {
    rotation: -5,
    x: "-18vw",
    y: "0vh",
    duration: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".grid__card_hq",
      start: "top 80%",
      end: "top 10%",
      scrub: 2,
    },
  });
};

const cardVolunteerWorld = () => {
  gsap.to(".grid__card_volunteer_world", {
    rotation: 0,
    x: "0vw",
    y: "-30vh",
    duration: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".grid__card_search",
      start: "top 80%",
      end: "top 10%",
      scrub: 2,
    },
  });
};

const cardWorldpackers = () => {
  gsap.to(".grid__card_worldpackers", {
    rotation: 0,
    x: "-33vw",
    y: "0vh",
    duration: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".grid__card_worldpackers",
      start: "top 80%",
      end: "top 10%",
      scrub: 2,
    },
  });
};

const cards = () => {
  cardEsc();
  cardHq();
  cardSearch();
  cardVolunteerWorld();
  cardWorldpackers();
};

const splitEmailText = () => {
  let targets = gsap.utils.toArray(".email__white__intro span");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".email__white__intro",
      start: "top 80%",
      end: "top 30%",
      scrub: 1,
    },
  });

  tl.to(targets, {
    opacity: 1,
    rotation: 10,
    duration: 0.1,
    stagger: {
      each: 0.1,
    },
  });

  tl.to(".email__white__bar",
    {
      x: "23vw",
      duration: 4,
      stagger: 0.1,
      ease: "power1.out",
    },
    0
  );
};

const plane = () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".research__text__email",
      start: "top 50%",
      end: "bottom -20%",
      scrub: 1,
    },
  });


  tl.to(".research__text__plane__img", {
    motionPath: {
      path: "#planePath",
      align: "#planePath",
      alignOrigin: [0.5, 0.5],
      start: 0,
      end: 0.5,
    },
    scale: 2,
    duration: 5,
    ease: "power1.inOut",
  });

  tl.to(".research__text__plane__img", {
    scaleX: -2,
    duration: 0.1,
    ease: "power1.inOut",
  });

  tl.to(".research__text__plane__img", {
    motionPath: {
      path: "#planePath",
      align: "#planePath",
      alignOrigin: [0.5, 0.5],
      start: 0.5,
      end: 0.9,
    },
    rotation: -90,
    scale: 0,
    duration: 10,
    ease: "power1.inOut",
  });
};

const pinPackingText = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".packing__text__p",
      start: "top 50%",
      end: "+=10000",
      scrub: 1,
      pin: ".packing__text",
    },
  });

  tl.fromTo(
    ".packing__text",
    { opacity: 0 }, 
    { opacity: 1, duration: 1, ease: "power1.inOut" } 
  );

  tl.to(".packing__text__divs1", {
    x: "-100vw",
    y: "50vh",
    rotation: -30,
    opacity: 0,
    duration: 40,
    ease: "power1.out",
  });

  tl.to(".packing__text__divs2", {
    x: "-100vw",
    y: "50vh",
    rotation: -30,
    opacity: 0,
    duration: 30,
    ease: "power1.out",
  });

  tl.to(".packing__text__divs3", {
    x: "-100vw",
    y: "50vh",
    rotation: -30,
    opacity: 0,
    duration: 30,
    ease: "power1.out",
  });

  tl.to(".packing__text__divs4", {
    x: "-100vw",
    y: "50vh",
    rotation: -30,
    opacity: 0,
    duration: 30,
    ease: "power1.out",
  });

  tl.to(".packing__text__divs_end",{
    opacity: 1,
    duration: 10,
  })
};


const init = () => {
  balanceSwingAnimation();
  headMoving();
  introText();
  rainAndPileUp();
  textSchool();
  parentsBanner();
  cards();
  splitEmailText();
  plane();
  pinPackingText();
};
init();
