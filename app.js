var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,

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
