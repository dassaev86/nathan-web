
// $(function(){
//     $('.multiple-items').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//       });
// })

let menuButton = document.querySelector(".main-header i");
let mainHeader = document.querySelector(".main-header");
let mobileNav = document.querySelector(".mobile-nav");
let mobileCta = document.querySelector(".main-header__mobile-cta");
let open = false;
let phrases = document.querySelectorAll(".about__phrase");
let aboutArrow = document.querySelector(".about_arrow");
let dots = document.querySelectorAll(".dot");



let hideMobileNav = (size) => {
  if (!size.matches) { // If media query matches
    mainHeader.style.height = "auto";
    mobileNav.style.display = "none";
    mobileCta.style.display = "none";
    open = false;
  } 
}

let size = window.matchMedia("(max-width: 451px)")
hideMobileNav(size) // Call listener function at run time
size.addListener(hideMobileNav) // Attach listener function on state changes



let toggleMenu = (open) => {
  if (open) {
    mainHeader.style.height = "50%";
    mobileNav.style.display = "inline-block"
    mobileCta.style.display = "inline-block"
  } else {
    mainHeader.style.height = "auto";
    mobileNav.style.display = "none";
    mobileCta.style.display = "none";
  }
}


menuButton.addEventListener("click", () => {
  
  open = !open;
  toggleMenu(open);

})


$(".slider").slick({
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  arrowControls: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
});


jQuery(window).on("load scroll", function () {
  // "use strict"; // Start of use strict
  // // Loader
  // $(".spinner").fadeOut();
  // $(".preloader-area").delay(350).fadeOut("slow");

  let scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll < 2) {
    $(".main-header").removeClass("sticky");
  } else {
    $(".main-header").addClass("sticky");
  }
});


let changePhrase = (currentPhrase) => {
   
  for (i=0; i < 4; i++) {
    if (currentPhrase === i) {    
      phrases[i].classList.add("selected-phrase");
      dots[i].classList.add("selected");
    } else {
      phrases[i].classList.remove("selected-phrase");
      dots[i].classList.remove("selected");
    }
    
  } 
}

let currentPhrase = 0;
aboutArrow.addEventListener("click", () => {
   currentPhrase = currentPhrase + 1;
   if (currentPhrase === 4) {
     currentPhrase = 0;
   }
   changePhrase(currentPhrase);
});








