let prevScrollpos = window.pageYOffset;
let header = document.querySelector("header");
let headerHeight = header.offsetHeight;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    header.style.transition = "transform 0.5s ease-in-out";
    header.style.transform = "translateY(0)";
  } else {
    header.style.transition = "transform 0.5s ease-in-out";
    header.style.transform = `translateY(-${headerHeight}px)`;
  }
  prevScrollpos = currentScrollPos;
}

const normalText = document.querySelector('.normal');
normalText.addEventListener('click', () => {
  normalText.classList.toggle('underline-on');
});

const animateText = document.getElementById('animate-text');

window.addEventListener('scroll', () => {
  const { top, bottom } = animateText.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (top < windowHeight * 0.8 && bottom > 0) {
    animateText.style.opacity = 1;
    animateText.style.transform = 'translateY(0)';
  }
});






/* ANIMATIONS */

const homeText = document.querySelector('.home-text h1');
const homeBtn = document.querySelector('.home-btn');

window.addEventListener('scroll', () => {
  const { top: textTop, bottom: textBottom } = homeText.getBoundingClientRect();
  const { top: btnTop, bottom: btnBottom } = homeBtn.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (textTop < windowHeight * 0.8 && textBottom > 0) {
    homeText.style.opacity = 1;
    homeText.style.transform = 'translateY(0)';
  }

  if (btnTop < windowHeight * 0.8 && btnBottom > 0) {
    setTimeout(() => {
      homeBtn.style.opacity = 1;
      homeBtn.style.transform = 'translateY(0)';
    }, 400); // add a delay of 500 milliseconds (half a second)
  }
});

const contactElems = document.querySelectorAll('.contact h1');

window.addEventListener('scroll', () => {
  contactElems.forEach((elem, index) => {
    const { top: elemTop, bottom: elemBottom } = elem.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const delay = index * 5000; // add a delay of 500 milliseconds (half a second) for each element

    if (elemTop < windowHeight * 0.8 && elemBottom > 0) {
      setTimeout(() => {
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(0)';
      }, delay);
    }
  });
});


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar')
  const navbarLinks = document.querySelectorAll('.navbar li');


  burger.addEventListener('click',()=>{
      //toggle nav 
    nav.classList.toggle('nav-active')
    //animate links

    navbarLinks.forEach((link, index)=>{ 
    
      if(link.style.animation){
        link.style.animation = ''
      }else{
        link.style.animation = `navbarFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    })
    //burger animation
    burger.classList.toggle('toggle')
  })


}

navSlide();






