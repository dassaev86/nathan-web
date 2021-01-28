let menuButton = document.querySelector(".main-header i");
let mainHeader = document.querySelector(".main-header");
let mobileNav = document.querySelector(".mobile-nav");
let mobileCta = document.querySelector(".main-header__mobile-cta");
let open = false;
let phrases = document.querySelectorAll(".about__phrase");
let aboutArrow = document.querySelector(".about_arrow");
let dots = document.querySelectorAll(".dot");
let phraseContainer = document.querySelector(".about__phrase-container");



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


$(".slider__services").slick({
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrowControls: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
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
  console.log("Scroll: ", scroll)
  if (scroll < 2) {
    $(".main-header").removeClass("sticky");
  } else {
    $(".main-header").addClass("sticky");
  }

  // if (scroll < 1950) {
  //   $(".roles__hats-container div:nth-child(1)").removeClass("show-hat");
  // } else {
  //   $(".roles__hats-container div:nth-child(1)").addClass("show-hat");
  // }

  // if (scroll < 2050) {
  //   $(".roles__hats-container div:nth-child(2)").removeClass("show-hat");
  // } else {
  //   $(".roles__hats-container div:nth-child(2)").addClass("show-hat");
  // }

  // if (scroll < 2150) {
  //   $(".roles__hats-container div:nth-child(3)").removeClass("show-hat");
  // } else {
  //   $(".roles__hats-container div:nth-child(3)").addClass("show-hat");
  // }

  // if (scroll < 2250) {
  //   $(".roles__hats-container div:nth-child(4)").removeClass("show-hat");
  // } else {
  //   $(".roles__hats-container div:nth-child(4)").addClass("show-hat");
  // }

  // if (scroll < 2350) {
  //   $(".roles__hats-container div:nth-child(5)").removeClass("show-hat");
  // } else {
  //   $(".roles__hats-container div:nth-child(5)").addClass("show-hat");
  // }



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

dots[0].addEventListener("click", () => {
  currentPhrase = 0;
  changePhrase(currentPhrase);
});

dots[1].addEventListener("click", () => {
  currentPhrase = 1;
  changePhrase(currentPhrase);
});


dots[2].addEventListener("click", () => {
  currentPhrase = 2;
  changePhrase(currentPhrase);
});


dots[3].addEventListener("click", () => {
  currentPhrase = 3;
  changePhrase(currentPhrase);
});

phraseContainer.addEventListener("click", () => {
  currentPhrase = currentPhrase + 1;
  if (currentPhrase === 4) {
    currentPhrase = 0;
  }
  changePhrase(currentPhrase);
});






// Work Menu Mobile Select Code

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

let rolesScroll = 0;
$(".roles").scroll(function(){
  console.log("Estoy en roles: ", rolesScroll);
});









