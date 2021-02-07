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
    mobileNav.style.visibility = "visible";
    mobileCta.style.visibility = "visible";
  } else {
    mainHeader.style.height = "83px";
    mobileNav.style.visibility = "hidden";
    mobileCta.style.visibility = "hidden";
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
let nameNextButton = document.querySelectorAll('#input-name button');
let emailNextButton = document.querySelectorAll('#input-email button');
let messageSendButton = document.querySelectorAll('#input-message button');
let emailBackArrow = document.querySelectorAll("#input-email img");
let messageBackArrow = document.querySelectorAll("#input-message img");
let confirmationCloseButton = document.querySelectorAll("#confirmation button");
let ctaSection = document.querySelector(".cta-section");
let ctaButton = document.querySelector(".main-header__cta");
let closeModal = document.querySelector(".cta-section__header i");
let requiredMessageName = document.querySelector("#input-name .required-message");
let requiredMessageEmail = document.querySelector("#input-email .required-message");




ctaButton.addEventListener("click", () => {
  ctaSection.classList.remove('hidden');
});

mobileCta.addEventListener("click", () => {
  ctaSection.classList.remove('hidden');
});

closeModal.addEventListener("click", () => {
  ctaSection.classList.add('hidden');
});


const nameNextButtonClick = () => {
  if (inputName.value.trim() !== "") {
    inputNameForm.style.display = "none";
    inputEmailForm.style.display = "flex";
    inputEmailLabel.innerHTML = "Thanks " + inputName.value + "! What's your email?"
    requiredMessageName.style.display = "none";
    inputName.classList.remove("required-input")
  } else {
    requiredMessageName.style.display = "block";
    inputName.classList.add("required-input")
  }
}

const emailNextButtonClick = () => {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail.value)) {
    inputEmailForm.style.display = "none";
    inputMessageForm.style.display = "flex";
    requiredMessageEmail.style.display = "none";
    inputEmail.classList.remove("required-input")
  } else {
    requiredMessageEmail.style.display = "block";
    inputEmail.classList.add("required-input")
  }
}

const messageSendButtonClick = () => {
  inputMessageForm.style.display = "none";
  confirmationForm.style.display = "flex";
  inputConfirmationLabel.innerHTML = "Thank you, " + inputName.value + ".";
}

nameNextButton[0].addEventListener("click", nameNextButtonClick);
nameNextButton[1].addEventListener("click", nameNextButtonClick);

emailNextButton[0].addEventListener("click", emailNextButtonClick);
emailNextButton[1].addEventListener("click", emailNextButtonClick);

messageSendButton[0].addEventListener("click", messageSendButtonClick);
messageSendButton[1].addEventListener("click", messageSendButtonClick);

emailBackArrow[0].addEventListener("click", () => {
  inputEmailForm.style.display = "none";
  inputNameForm.style.display = "flex";
});

emailBackArrow[1].addEventListener("click", () => {
  inputEmailForm.style.display = "none";
  inputNameForm.style.display = "flex";
});


messageBackArrow[0].addEventListener("click", () => {
  inputEmailForm.style.display = "flex";
  inputMessageForm.style.display = "none";
});

messageBackArrow[1].addEventListener("click", () => {
  inputEmailForm.style.display = "flex";
  inputMessageForm.style.display = "none";
});

confirmationCloseButton[0].addEventListener("click", () => {
  ctaSection.classList.add('hidden');
});

confirmationCloseButton[1].addEventListener("click", () => {
  ctaSection.classList.add('hidden');
});


// Scroll Magin Animations

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();


tl.from('.role5', .5, {x:-200, opacity: 0}, "=-6");
tl.from('.hat5', .5, {y:-200, opacity: 0}, "=-6");
tl.from('.role1', .5,{x:-200, opacity: 0}, "=-4");
tl.from('.hat1', .5, {y:-200, opacity: 0}, "=-4");
tl.from('.role2', .5, {x:-200, opacity: 0}, "=-3");
tl.from('.hat2', .5, {y:-200, opacity: 0}, "=-3");
tl.from('.role3', .5, {x:-200, opacity: 0}, "=-2");
tl.from('.hat3', .5, {y:-200, opacity: 0}, "=-2");
tl.from('.role4', .5, {x:-200, opacity: 0}, "=-1");
tl.from('.hat4', .5, {y:-200, opacity: 0}, "=-1");


const scene = new ScrollMagic.Scene({
  triggerElement: ".roles",
            triggerHook: "onLeave",
            duration: "200%"
})
  .setPin(".roles")
  .setTween(tl)
    .addTo(controller);
    
    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }











