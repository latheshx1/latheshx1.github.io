// Hero section animation
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero p');
const heroButton = document.querySelector('.hero button');

gsap.from(heroTitle, {
  duration: 1,
  x: '-100%',
  ease: 'power2.out',
  delay: 0.5
});

gsap.from(heroSubtitle, {
  duration: 1,
  x: '100%',
  ease: 'power2.out',
  delay: 1
});

gsap.from(heroButton, {
  duration: 1,
  y: '100%',
  ease: 'power2.out',
  delay: 1.5
});

// About section animation
const aboutTitle = document.querySelector('#about h2');
const aboutSubtitle = document.querySelector('#about p');
const aboutListItems = document.querySelectorAll('#about ul li');

gsap.from(aboutTitle, {
  duration: 1,
  y: '-100%',
  ease: 'power2.out',
  delay: 0.5
});

gsap.from(aboutSubtitle, {
  duration: 1,
  y: '100%',
  ease: 'power2.out',
  delay: 1
});

aboutListItems.forEach((item, index) => {
  gsap.from(item, {
    duration: 1,
    x: index % 2 === 0 ? '-100%' : '100%',
    ease: 'power2.out',
    delay: 1.5 + index * 0.3
  });
});


const header = document.querySelector('.header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hidden');
  } else {
    header.classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
});


const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.slides');
const slideList = carousel.querySelectorAll('.slide');
const indicators = carousel.querySelectorAll('.indicator');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');

let currentIndex = 0;
let slideCount = slideList.length;
let slideWidth = slideList[0].offsetWidth;

function goToSlide(index) {
  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }
  currentIndex = index;
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
}

function goToPrev() {
  goToSlide(currentIndex - 1);
}

function goToNext() {
  goToSlide(currentIndex + 1);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
});

prevBtn.addEventListener('click', goToPrev);
nextBtn.addEventListener('click', goToNext);

goToSlide(currentIndex);


function myFunction()
{
  location.replace("https://music.youtube.com/watch?v=dQw4w9WgXcQ")
}