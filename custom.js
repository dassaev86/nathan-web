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

$("#talk, #talk_mobile").animatedModal({
   animatedIn:'zoomIn',
   animatedOut:'zoomOut',
   color:'#51ac6b',
   animationDuration:.8,
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
    mobileNav.style.display = "block";
    mobileNav.style.visibility = "visible";
    mobileCta.style.visibility = "visible";
    mobileCta.style.display = "block";

  } else {
    mainHeader.style.height = "83px";
    mobileNav.style.display = "none";
    mobileNav.style.visibility = "hidden";
    mobileCta.style.visibility = "hidden";
     mobileCta.style.display = "none";
  }
}


menuButton.addEventListener("click", () => {
  open = !open;
  toggleMenu(open);
})

const prevSVG = `
<div class="slick-prev transparency">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="white"/>
<rect width="1440" height="5296" transform="translate(-635 -909)" fill="white"/>
<g filter="url(#filter0_d)">
<rect x="-283" y="-255" width="736" height="240" rx="8" fill="white"/>
</g>
<circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3667 11.6177C22.6155 11.359 23.0032 11.3666 23.2436 11.635C23.4841 11.9034 23.4909 12.3361 23.2591 12.6138L16.5241 20.1315L23.2591 27.3862C23.4909 27.6639 23.4841 28.0966 23.2436 28.365C23.0032 28.6334 22.6155 28.641 22.3667 28.3823L14.8571 20.1315L22.3667 11.6177Z" fill="#51AC6B"/>
<defs>
<filter id="filter0_d" x="-315" y="-271" width="800" height="304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feOffset dy="16"/>
<feGaussianBlur stdDeviation="16"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320833 0 0 0 0 0.318889 0 0 0 0 0.299444 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
</div>`

const nextSVG = `
<div class="slick-next transparency">
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="white"/>
<rect width="1440" height="5296" transform="translate(-715 -909)" fill="white"/>
<g filter="url(#filter0_d)">
<rect x="-363" y="-255" width="736" height="240" rx="8" fill="white"/>
</g>
<circle r="20" transform="matrix(1 8.74228e-08 8.74228e-08 -1 20 20)" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6333 28.3823C17.3845 28.641 16.9968 28.6334 16.7564 28.365C16.5159 28.0966 16.5091 27.6639 16.7409 27.3862L23.4759 19.8685L16.7409 12.6138C16.5091 12.3361 16.5159 11.9034 16.7564 11.635C16.9968 11.3666 17.3845 11.359 17.6333 11.6177L25.1429 19.8685L17.6333 28.3823Z" fill="#51AC6B"/>
<defs>
<filter id="filter0_d" x="-395" y="-271" width="800" height="304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feOffset dy="16"/>
<feGaussianBlur stdDeviation="16"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.320833 0 0 0 0 0.318889 0 0 0 0 0.299444 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
</div>
`

// prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/arrow-back.png'>",
// nextArrow:"<img class='a-right control-c next slick-next' src='./assets/arrow-fordward2.png'>",


$(".slider").slick({
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  arrowControls: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: prevSVG,
  nextArrow: nextSVG,
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
  autoplaySpeed: 3000,
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


// $(".about__phrase-container").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
// })


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



/*
ctaButton.addEventListener("click", () => {
  ctaSection.classList.remove('hidden');
});

mobileCta.addEventListener("click", () => {
  ctaSection.classList.remove('hidden');
});

*/



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

const resetForm = () => {
  inputNameForm.style.display = "flex";
  confirmationForm.style.display = "none";
  inputName.value = "";
  inputEmail.value = "";
  inputMessage.value = "";
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


confirmationCloseButton[0].addEventListener("click", resetForm );

confirmationCloseButton[1].addEventListener("click", resetForm);

closeModal.addEventListener("click", resetForm);



// Scroll Magin Animations

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();


tl.from('.role5', .5, {opacity: 0}, "=-6");
tl.from('.hat5', .5, {y:-200, opacity: 0}, "=-6");
// tl.from('#check5', .5, {opacity: 0}, "=-6");


tl.from('.role1', .5,{opacity: 0}, "=-4");
tl.from('.hat1', .5, {y:-200, opacity: 0}, "=-4");
// tl.from('#check1', .5, {opacity: 0}, "=-4");


tl.from('.role2', .5, {opacity: 0}, "=-3");
tl.from('.hat2', .5, {y:-200, opacity: 0}, "=-3");
// tl.from('#check2', .5, {opacity: 0}, "=-3");


tl.from('.role3', .5, {opacity: 0}, "=-2");
tl.from('.hat3', .5, {y:-200, opacity: 0}, "=-2");
// tl.from('#check3', .5, {opacity: 0}, "=-2");


tl.from('.role4', .5, {opacity: 0}, "=-1");
tl.from('.hat4', .5, {y:-200, opacity: 0}, "=-1");
// tl.from('#check4', .5, {opacity: 0}, "=-1");




const scene = new ScrollMagic.Scene({
  triggerElement: ".roles",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".roles")
  .setTween(tl)
    .addTo(controller);
    
    function updatePercentage() {
      //percent.innerHTML = (tl.progress() *100 ).toFixed();
      tl.progress();
      console.log(tl.progress());
    }











