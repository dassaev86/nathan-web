let menuButton = document.querySelector(".main-header i");
let mainHeader = document.querySelector(".main-header");
let mobileNav = document.querySelector(".mobile-nav");
let mobileCta = document.querySelector(".main-header__mobile-cta");
let open = false;
let phrases = document.querySelectorAll(".about__phrase");
let aboutArrow = document.querySelector(".about_arrow");
let dots = document.querySelectorAll(".dot");
let phraseContainer = document.querySelector(".about__phrase-container");

jQuery(window).on("load scroll", function () {
   
  let scroll = $(window).scrollTop();
  console.log("Scroll: ", scroll)
  if (scroll < 2) {
    $(".main-header").removeClass("sticky");
  } else {
    $(".main-header").addClass("sticky");
  }
  
});



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
    mainHeader.style.height = "100%";
    mobileNav.style.visibility = "visible";
    mobileCta.style.visibility = "visible";
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.style.height = "83px";
    mobileNav.style.visibility = "hidden";
    mobileCta.style.visibility = "hidden";
    if (document.documentElement.scrollTop === 0) {
      mainHeader.classList.remove("sticky");
    }
  }
}


menuButton.addEventListener("click", () => {
  open = !open;
  toggleMenu(open);
})






  
