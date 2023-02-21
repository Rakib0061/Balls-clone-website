var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    // when window width is min 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is min 576px
    576: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    // when window width is min 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
  }

});



var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay : {
    delay:3000,
},
});





// ***********************NavBar fixed*********************

let navigation =  document.querySelector("#navigation");
window.addEventListener("scroll",function(){
  let Y = window.scrollY;
    navigation.classList.toggle("sticky",Y >0);
});


// ***********************NavBar fixed*********************






// ***********************footer popup*********************

let popup_thankyou = document.querySelector(".popup_thankyou");
let popupbutton = document.getElementById("popupbutton");
let input2 = document.querySelector(".input2");
let input1 = document.querySelector(".input1");

input2.addEventListener("click",()=>{
  if(input1.value.toString().indexOf("@gmail.com") > -1){
    if(popup_thankyou.style.display != "block"){
      popup_thankyou.style.display = "block"
    }
  }
});

popupbutton.addEventListener("click",()=>{
  if(popup_thankyou.style.display != "none"){
    popup_thankyou.style.display = "none"
  }
});


// ***********************footer popup*********************
