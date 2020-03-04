const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar li");
const topLine = document.querySelector(".top");
const midLine = document.querySelector(".mid");
const botLine = document.querySelector(".bot");
const projects = document.querySelectorAll(".project-container");
const projectInfo = document.querySelector('.project-info');
const infoContent = document.querySelector('.project-info-content');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click', () => {
      navbar.classList.toggle('navbar-open');
      for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle('links-open');
      }
      console.log(midLine);
      topLine.classList.toggle('top-open');
      midLine.classList.toggle('mid-open');
      botLine.classList.toggle('bot-open');

});

for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', () => {
            projectInfo.classList.add('info-open');
            switch (i) {
                  case 0:
                        infoContent.innerHTML = "To Do App";
                        break;
                  case 1:
                        infoContent.innerHTML = "Snake";
                        break;
                  case 2:
                        infoContent.innerHTML = "My website";
                        break;
                  default: infoContent.innerHTML = "...";
            }
      });
};

cross.addEventListener('click', () => {
      projectInfo.classList.remove('info-open');
});