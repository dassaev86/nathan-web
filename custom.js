let menuButton = document.querySelector(".main-header i");
let mainHeader = document.querySelector(".main-header");
let mobileNav = document.querySelector(".mobile-nav");
let mobileCta = document.querySelector(".main-header__mobile-cta");
let open = false;
let phrases = document.querySelectorAll(".about__phrase");
let aboutArrow = document.querySelector(".about_arrow");
let dots = document.querySelectorAll(".dot");
let phraseContainer = document.querySelector(".about__phrase-container");
let currentPhrase = 0;



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
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/arrow-back.png'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='./assets/arrow-fordward2.png'>",
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


// aboutArrow.addEventListener("click", () => {
//   console.log("Current Before: ", currentPhrase);
//    currentPhrase = currentPhrase + 1 ;
//    if (currentPhrase > 3) {
//      currentPhrase = 0;
//    }
//    console.log("Current After: ", currentPhrase);
//    changePhrase(currentPhrase);
// });

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


// Call to Action Code

let inputNameForm = document.querySelector('#input-name');
let inputEmailForm = document.querySelector('#input-email');
let inputMessageForm = document.querySelector('#input-message');
let confirmationForm = document.querySelector('#confirmation');
let inputName = document.querySelector("#input-name #name");
let inputEmail = document.querySelector("#input-email #email");
let inputMessage = document.querySelector("#input-message #message");
let inputEmailLabel = document.querySelector("#input-email label");
let inputConfirmationLabel = document.querySelector("#confirmation label");
let nameNextButton = document.querySelector('#input-name button');
let emailNextButton = document.querySelector('#input-email button');
let messageSendButton = document.querySelector('#input-message button');
let emailBackArrow = document.querySelector("#input-email img");
let messageBackArrow = document.querySelector("#input-message img");
let confirmationCloseButton = document.querySelector("#confirmation button");
let ctaSection = document.querySelector(".cta-section");
let ctaButton = document.querySelector(".main-header__cta");
let closeModal = document.querySelector(".cta-section__header i");
let requiredMessage = document.querySelector(".required-message");



ctaButton.addEventListener("click", () => {
  ctaSection.classList.remove('hidden');
});

closeModal.addEventListener("click", () => {
  ctaSection.classList.add('hidden');
});


nameNextButton.addEventListener("click", () => {

  if (inputName.value.trim() !== "") {
    inputNameForm.style.display = "none";
    inputEmailForm.style.display = "flex";
    inputEmailLabel.innerHTML = "Thanks " + inputName.value + "! What's your email?"
    requiredMessage.style.display = "none";
    inputName.classList.remove("required-input")
  } else {
    requiredMessage.style.display = "block";
    inputName.classList.add("required-input")
  }

});

emailNextButton.addEventListener("click", () => {
  inputEmailForm.style.display = "none";
  inputMessageForm.style.display = "flex";
});

emailBackArrow.addEventListener("click", () => {
  inputEmailForm.style.display = "none";
  inputNameForm.style.display = "flex";
});

messageSendButton.addEventListener("click", () => {
  inputMessageForm.style.display = "none";
  confirmationForm.style.display = "flex";
  inputConfirmationLabel.innerHTML = "Thank you, " + inputName.value + ".";
});

messageBackArrow.addEventListener("click", () => {
  inputEmailForm.style.display = "flex";
  inputMessageForm.style.display = "none";
});

confirmationCloseButton.addEventListener("click", () => {
  ctaSection.classList.add('hidden');
});















