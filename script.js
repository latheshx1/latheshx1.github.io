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
