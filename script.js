

// ------------menu------------
let menuIcon = document.querySelector(".menu-icon");
let responsiveCol = document.querySelector(".responsive-navbar-menu");
let main=document.querySelector(".main")
let navbarSection=document.querySelector(".navbar-section");
menuClick = 0;
menuCounter = 1;
menuIcon.addEventListener("click", function () {
    for (let i = 0; i < menuCounter; i++) {
        if (menuClick % 2 == 0) {
            responsiveCol.style.display = "block";
            responsiveCol.style.top = "40px"
            responsiveCol.style.transition = "top .2s ease-in-out"

        } else {
            responsiveCol.style.display = "none";
            responsiveCol.style.top = "0"
            responsiveCol.style.transition = "top .2s ease-in-out"
        }
        menuClick++;
    }
});

window.onscroll =function () {
    if(window.innerWidth>768){
    if(document.documentElement.scrollTop > 200){
        main.style.display="none";
        navbarSection.style.position="fixed"
        navbarSection.style.top=0
        navbarSection.style.right=0
        navbarSection.style.left=0
        navbarSection.style.zIndex=20
    }
    else{
    main.style.display="block";
    navbarSection.style.position="relative"
    }
}
}




//----------------slider---------------
let allStage = document.querySelector(".all-stage");
let stages = document.querySelector(".stages");
let stage = document.querySelectorAll(".stage");
let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let direction = document.querySelector(".direction");
let dot = document.querySelectorAll(".dot");
let slideText = document.querySelectorAll(".slide-text");
let index = 0;
var myTime
function Slides() {
    for (let i = 0; i < stage.length; i++) {
        stage[i].style.display = "none";
        stage[i].style.opacity = 0;
    }
    for (let i = 0; i < stage.length; i++) {

    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", "");
    }
    if (index > stage.length - 1) { index = 0 }
    index++
    stage[index - 1].style.display = "block";
    stage[index - 1].style.opacity = 1;
    slideText[index - 1].style.display = "block";
    dot[index - 1].classList.add("active");
    myTime = setTimeout(Slides, 3000);
}
Slides()
allStage.addEventListener("mouseover", function () {
    clearTimeout(myTime);
});
allStage.addEventListener("mouseleave", function () {
    myTime = setTimeout(Slides, 3000);
});
nextButton.addEventListener("click", function () {
    for (let i = 0; i < stage.length; i++) {
        stage[i].style.display = "none";
        stage[i].style.opacity = 0;
    }
    index++;
    if (index > stage.length) {
        index = 1;
    }
    stage[index - 1].style.display = "block";
    stage[index - 1].style.opacity = 1;

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", " ");
    }
    dot[index - 1].classList.add("active");
});
prevButton.addEventListener("click", function () {
    for (let i = 0; i < stage.length; i++) {
        stage[i].style.display = "none";
        stage[i].style.opacity = 0;
    }
    index--;
    if (index > stage.length) {
        index = 1;
    }
    if (index <= 0) {
        index = stage.length;
    }
    stage[index - 1].style.display = "block";
    stage[index - 1].style.opacity = 1;

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("active", " ");
    }
    dot[index - 1].classList.add("active");
});

//-------------------------------about slider------------------------

let aboutContainer = document.querySelector(".about-sliders");
let aboutImg = document.querySelector(".about-img");
let aboutSlide = document.querySelectorAll(".about-slide");
let aboutLeftBtn = document.querySelector(".about-left-btn");
let aboutRightBtn = document.querySelector(".about-right-btn");
const len = aboutSlide.length;
const w=aboutImg.clientWidth 
let i = 0;
let aboutDot = document.querySelectorAll(".about-dot");
aboutRightBtn.addEventListener("click", function () {
    i++;
    if (i < len) {
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i - 1].classList.remove("active-about-dot");
        aboutDot[i].classList.add("active-about-dot");
    }
    if (i >= len) {
        i = 0;
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i].classList.add("active-about-dot");
        aboutDot[i + 2].classList.remove("active-about-dot");
    }
});

aboutLeftBtn.addEventListener("click", function () {
    i--;
    if (i >= 0) {
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i + 1].classList.remove("active-about-dot");
        aboutDot[i].classList.add("active-about-dot");
    }
    if (i < 0) {
        i = len - 1;
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i].classList.add("active-about-dot");
        aboutDot[i - 2].classList.remove("active-about-dot");
    }
});

const next = () => {
    i++;
    if (i < len) {
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i - 1].classList.remove("active-about-dot");
        aboutDot[i].classList.add("active-about-dot");
    }
    if (i >= len) {
        i = 0;
        aboutContainer.style.transform = `translateX(${-w * i}px)`;
        aboutDot[i].classList.add("active-about-dot");
        aboutDot[i + 2].classList.remove("active-about-dot");
    }
     setTimeout(next, 3000);
};
next()

window.addEventListener("load",function(){

  var counters = document.querySelectorAll(".count-text h3");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 1);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
})



let featureDirectionBtns = document.querySelectorAll(".feature-direction-btns button")
let all = document.querySelectorAll(".all")
featureDirectionBtns.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".activ").classList.remove("activ")
        all.forEach((col) => {
            if (col.dataset.filter === button.dataset.filter || button.dataset.filter == "all") {
                col.style.display = "block"
                button.classList.add("activ")
            } else {
                col.style.display = "none"
            }
        })
    })
})

let clientSliderStages = document.querySelector(".client-slider-stages")
let clientSliderStage = document.querySelectorAll(".client-slider-stage")
let clientSliderBtn = document.querySelectorAll(".client-slider-direction-btns button")
var slideIndex = 0;
showSlides();
var showing;
function showSlides() {
    var i;
    for (i = 0; i < clientSliderStage.length; i++) {
        clientSliderStage[i].style.display = "none";

    }
    for (i = 0; i < clientSliderBtn.length; i++) {
        clientSliderBtn[i].className = clientSliderBtn[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > clientSliderStage.length) { slideIndex = 1 }
    clientSliderStage[slideIndex - 1].style.display = "block";
    clientSliderStage[slideIndex - 1].style.transition = "all .4s ease-in-out"

    clientSliderBtn[slideIndex - 1].className += " active";
    showing = setTimeout(showSlides, 2000);
}

clientSliderStages.addEventListener("mouseenter", () => {
    clearTimeout(showing);
})

clientSliderStages.addEventListener("mouseleave", () => {
    showing = setTimeout(showSlides, 2000);
})



let questions = document.querySelectorAll(".question")
let questionBtns = document.querySelectorAll(".question-btn")
let answerText = document.querySelectorAll(".answer-text")

questions.forEach((question) => {
    question.addEventListener("click", () => {

        if (question.dataset.target == question.parentElement.lastElementChild.dataset.target) {
            if (question.parentElement.lastElementChild.classList.contains("act")) {
                question.parentElement.lastElementChild.classList.remove("act")
                question.lastElementChild.lastElementChild.classList.remove("fa-plus")
                question.lastElementChild.lastElementChild.classList.add("fa-minus")
            }
            else {
                answerText.forEach(answer => {
                    if (answer.classList.contains("act")) {
                        answer.classList.remove("act")
                        answer.parentElement.firstElementChild.lastElementChild.lastElementChild.classList.remove("fa-plus")
                        answer.parentElement.firstElementChild.lastElementChild.lastElementChild.classList.add("fa-minus")
                        question.lastElementChild.lastElementChild.classList.remove("fa-plus")
                        question.lastElementChild.lastElementChild.classList.add("fa-minus")
                    }
                })
                question.parentElement.lastElementChild.classList.add("act")
                question.lastElementChild.lastElementChild.classList.remove("fa-minus")
                question.lastElementChild.lastElementChild.classList.add("fa-plus")

            }

        }
    })
})