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
const infoGithub = document.querySelector('.project-info-github');
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
                        infoContent.innerHTML = "Prosta aplikacja umożliwiająca tworzenie listy zadań, określanie dat ich wykonania oraz nadawanie priorytetu poszczególnym zadaniom.";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript, React";
                        infoGithub.innerHTML = "<a href='' id='github-link'>Sprawdź na Github</a>"
                        break;
                  case 1:
                        infoHeader.innerHTML = "Snake";
                        infoImage.innerHTML = "<img src='/img/projects/snake.jpg' alt='Snake' id='info-img'>"
                        infoContent.innerHTML = "Uproszczona wersja bardzo popularnej gry zręcznościowej, polegająca na zdobyciu jak największej liczby punktów.";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript";
                        infoGithub.innerHTML = "<a href='' id='github-link'>Sprawdź na Github</a>"
                        break;
                  case 2:
                        infoHeader.innerHTML = "My website";
                        infoImage.innerHTML = "<img src='/img/projects/my-website.jpg' alt='My website' id='info-img'>"
                        infoContent.innerHTML = "Jest to strona którą aktualnie przeglądasz, przedstawiająca moją osobę, umiejętności, wykonane projeky oraz umożliwiająca kontakt ze mną.";
                        infoTech.innerHTML = "<span id='tech-used'>Wykorzystane technologie: </span> HTML, CSS, JavaScript, PHP";
                        infoGithub.innerHTML = "<a href='' id='github-link'>Sprawdź na Github</a>"
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
                  let anchor = document.querySelector(`a[href='#${target}']`);
                  anchor.classList.remove('active');
            }

      });
})

window.onload = function () {
      document.querySelector(`a[href='#home']`).classList.add('active');
}