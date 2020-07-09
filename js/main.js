const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar li");
const topLine = document.querySelector(".top");
const midLine = document.querySelector(".mid");
const botLine = document.querySelector(".bot");
const projects = document.querySelectorAll(".project-container");
const projectInfo = document.querySelector('.project-info');
const infoContent = document.querySelector('.project-info-content');
const infoHeader = document.querySelector('.project-info-header');
const infoImage = document.querySelector('.project-info-image');
const infoTech = document.querySelector('.project-info-tech');
const githubLink = document.querySelector('.github-link');
const liveLink = document.querySelector('.live-link');
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
                        infoHeader.innerHTML = "To Do App";
                        infoImage.innerHTML = "<img src='/img/projects/todoapp.jpg' alt='To Do App' id='info-img'>"
                        infoContent.innerHTML = "Simple version of To-Do Application built with React. ";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript, React";
                        githubLink.innerHTML = "<a href='https://github.com/kkowalczykk/todo-app' id='project-link'>Github</a>"
                        liveLink.innerHTML = "<a href='https://kkowalczykk.github.io/todo-app/' id='project-link'>Go Live</a>"
                        break;
                  case 1:
                        infoHeader.innerHTML = "Snake";
                        infoImage.innerHTML = "<img src='/img/projects/snake.jpg' alt='Snake' id='info-img'>"
                        infoContent.innerHTML = "";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript";
                        githubLink.innerHTML = "<a href='https://github.com/kkowalczykk/snake-game' id='project-link'>Github</a>"
                        liveLink.innerHTML = "<a href='https://kkowalczykk.github.io/snake-game/' id='project-link'>Go Live</a>"
                        break;
                  case 2:
                        infoHeader.innerHTML = "My portfolio";
                        infoImage.innerHTML = "<img src='/img/projects/my-website.jpg' alt='My website' id='info-img'>"
                        infoContent.innerHTML = "It is website you are curenttly watching.";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript, GSAP";
                        githubLink.innerHTML = "<a href='https://github.com/kkowalczykk/portfolio' id='project-link'>Github</a>"
                        liveLink.innerHTML = "<a href='#' id='project-link'>Go Live</a>"
                        break;
                  case 3:
                        infoHeader.innerHTML = "Sorting Visualizer";
                        infoImage.innerHTML = "<img src='/img/projects/visualizer.jpg' alt='My website' id='info-img'>"
                        infoContent.innerHTML = "Sorting Visualizer is an application which can show how sorting algorithms (Bublle Sort, Selection Sort) works.";
                        infoTech.innerHTML = "<span id='tech-used'>Built with: </span> React, Javascript, HTML, CSS";
                        githubLink.innerHTML = "<a href='https://github.com/kkowalczykk/Sorting-Visualizer' id='project-link'>Github</a>"
                        liveLink.innerHTML = "<a href='https://kkowalczykk.github.io/Sorting-Visualizer/' id='project-link'>Go Live</a>"
                        break;
                  default: infoContent.innerHTML = "...";
            }
      });
};

cross.addEventListener('click', () => {
      projectInfo.classList.remove('info-open');
});

document.querySelectorAll('.nav-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest',
            });

      });
});


const sections = document.querySelectorAll('section');


document.addEventListener('scroll', function () {

      sections.forEach((element, id) => {

            if (element.getBoundingClientRect().top < 50 || element.getBoundingClientRect().bottom <= 0) {
                  let target = element.id;
                  let anchor = document.querySelector(`a[href='#${target}']`);
                  anchor.classList.add('active');
                  if (element.getBoundingClientRect().top < element.getBoundingClientRect().height * -1) {
                        anchor.classList.remove('active');
                  }
            } else {
                  let target = element.id;
                  if (target != 'cv') {
                        let anchor = document.querySelector(`a[href='#${target}']`);
                        anchor.classList.remove('active');
                  }
            }

      });
})

window.onload = function () {
      sections.forEach((element, id) => {

            if (element.getBoundingClientRect().top < 100 || element.getBoundingClientRect().bottom <= 0) {
                  let target = element.id;
                  let anchor = document.querySelector(`a[href='#${target}']`);
                  anchor.classList.add('active');
                  if (element.getBoundingClientRect().top < element.getBoundingClientRect().height * -1) {
                        anchor.classList.remove('active');
                  }
            } else {
                  let target = element.id;
                  let anchor = document.querySelector(`a[href='#${target}']`);
                  anchor.classList.remove('active');
            }

      });
}