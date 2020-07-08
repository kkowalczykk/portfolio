const homeText = document.querySelector('.home-main');
gsap.registerPlugin(ScrollTrigger);

let onloadTL = gsap.timeline({ delay: 0.5 });

onloadTL.from(homeText, { duration: 1, opacity: 0, y: -50 });
onloadTL.from('.home-hi-emote', { duration: 0.5, opacity: 0, });
onloadTL.to('.home-hi-emote', { duration: 0.3, rotate: -15 });
onloadTL.to('.home-hi-emote', { duration: 0.3, rotate: 15 });
onloadTL.to('.home-hi-emote', { duration: 0.3, rotate: 0 });
onloadTL.to('.home-hi-emote', { duration: 0.3, rotate: 15 });
onloadTL.to('.home-hi-emote', { duration: 0.3, rotate: 0 });
onloadTL.from('.navbar', { duration: 1, opacity: 0, y: -50 }, 1.5);
onloadTL.from('#nav', { duration: 1, opacity: 0, y: -50 }, 1.5);
onloadTL.from('#scroll-button', { duration: 1, opacity: 0 }, 1.5);



let scrollDownTL = gsap.timeline({ repeat: -1, repeatDelay: 1.5, delay: 4 });

scrollDownTL.from('#scroll-button', { duration: 1.5, y: -30, ease: "expo.out" });
scrollDownTL.to('#scroll-button', { duration: 0.3, opacity: 0 });
scrollDownTL.to('#scroll-button', { duration: 0, y: 0 });
scrollDownTL.to('#scroll-button', { duration: 0.6, opacity: 1, y: -30, ease: "expo.out" });


const sectionTitles = document.querySelectorAll('section h1');
const dividers = document.querySelectorAll('.divider');
const aboutme = document.querySelector('.about-me-content');
const skillsTitles = document.querySelectorAll('.skills-p');
const skillsTables = document.querySelectorAll('.row');
const projectsContainers = document.querySelectorAll('.project-container');
const contactLinks = document.querySelectorAll('.contact-link');


sectionTitles.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=50px',
            },
            opacity: 0,
            duration: 1,
            x: 300,
            delay: 0.3,
      })
})

dividers.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=40px',
            },
            opacity: 0,
            duration: 1,
            width: 0,
            delay: 0.3,
      })
})

let aboutTL = gsap.timeline({
      scrollTrigger: {
            trigger: aboutme,
            start: 'top bottom-=40px',
      },
});

aboutTL.from('.about-me-text', { opacity: 0, duration: 2, y: 40 })
aboutTL.from('.my-photo', { opacity: 0, duration: 1, y: -20 }, 0.6)

skillsTitles.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=40px',
            },
            opacity: 0,
            duration: 1,
            delay: 0.3,
            y: 20,
      })
});

skillsTables.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=40px',
            },
            opacity: 0,
            duration: 1,
            delay: 0.3,
            y: 20,
      })
})

projectsContainers.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=100px',
            },
            opacity: 0,
            duration: 1,
            delay: 0.3,
            y: 20,
      })
})

contactLinks.forEach((element) => {
      gsap.from(element, {
            scrollTrigger: {
                  trigger: element,
                  start: 'top bottom-=100px',
            },
            opacity: 0,
            duration: 1,
            delay: 0.3,
            y: 20,
      })
})

gsap.from('.contact-container span', {
      scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100px',
      },
      opacity: 0,
      duration: 1,
      delay: 0.3,
      y: 20,
})