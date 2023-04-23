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

const homeTextElem = document.querySelector('.home-text');
const homeTextH1Elem = homeTextElem.querySelector('h1');
const homeTextPElem = homeTextElem.querySelector('p');

window.addEventListener('scroll', () => {
  const { top: elemTop, bottom: elemBottom } = homeTextElem.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (elemTop < windowHeight * 0.8 && elemBottom > 0) {
    homeTextH1Elem.style.opacity = 1;
    homeTextH1Elem.style.transform = 'translateY(0)';

    setTimeout(() => {
      homeTextPElem.style.opacity = 1;
      homeTextPElem.style.transform = 'translateY(0)';
    }, 500); // Delay the animation of the p element by 500 milliseconds (half a second)
  }
});



const displayElem = document.querySelector('.display');
const display1Elem = document.querySelector('.display1');
const display2Elem = document.querySelector('.display2');

// Set the initial opacity of all elements to 0
displayElem.style.opacity = 0;
display1Elem.style.opacity = 0;
display2Elem.style.opacity = 0;

// Set the transition property of all elements to make them fade in smoothly
displayElem.style.transition = 'opacity 0.5s ease-in-out';
display1Elem.style.transition = 'opacity 0.5s ease-in-out';
display2Elem.style.transition = 'opacity 0.5s ease-in-out';

window.addEventListener('scroll', () => {
  const { top: displayTop } = displayElem.getBoundingClientRect();
  const { top: display1Top } = display1Elem.getBoundingClientRect();
  const { top: display2Top } = display2Elem.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // If the top of the display element is within 80% of the viewport height, set its opacity to 1 after a delay of 300ms (0.3s)
  if (displayTop < windowHeight * 0.8) {
    setTimeout(() => {
      displayElem.style.opacity = 1;
    }, 100);
  }

  if (display1Top < windowHeight * 0.8) {
    setTimeout(() => {
      display1Elem.style.opacity = 1;
    }, 300);
  }

  if (display2Top < windowHeight * 1.1) {
    setTimeout(() => {
      display2Elem.style.opacity = 1;
    }, 500);
  }




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






