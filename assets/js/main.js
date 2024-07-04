// Custom select
$(".custom-select-selected-item").on("click", function () {
  $(this).siblings().slideToggle(200);
  $(".custom-select-selected-item").not($(this)).siblings().slideUp();
});

$(".custom-select-list-item").on("click", function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    setSlectedItem($(this));
    $(this).parent().slideUp();
});
function setSlectedItem(item) {
  $(item).parents(".custom-select").find(".custom-select-selected-item").text($(item).text());
}

$(document).on('click', function(event){
  if(!$(".custom-select-selected-item").is(event.target) && $(".custom-select-selected-item").has(event.target).length == 0){
    $(".custom-select-list").slideUp();
  }
});

$(window).on('scroll', function () {
  $(".custom-select-list").slideUp();
});
// End of Custom select

// 
// $(".").on("click", function(){
//   $(this).parent().find('.menu').slideToggle();
// })
// $('.nav-link').on('click', function () {
//   if ($(this).siblings('.menu').length) {
//       $(this).parent().siblings('.nav-item').find('.menu').slideUp();
//       $(this).next('.menu').slideToggle();
//   }
// });
$('.nav-item').on('click', function (e) {
  e.stopPropagation();
  if ($(this).children('.menu').length) {
      $(this).siblings('.nav-item').find('.menu').slideUp();
      $(this).children('.menu').first().slideToggle();
      $(this).children().find('.la-angle-right').first().toggleClass('angle-right-rotated');
      $(this).siblings('.nav-item').find('.la-angle-right').removeClass('angle-right-rotated');
  }
});

// $(".submenu menu .nav-item").on("click", function(){
//   $(".child-menu menu").slideToggle();
// })
$(".categories-btn").on("click", function(){
    $('.categories-btn-icon').toggleClass("angle-rotated");
    $(".sidebar-nav-categories").slideToggle(); 
    

  });

// categories-btn
$(".categories-btn-v2").on("click", function () {
  if(window.scrollY > document.querySelector('.top-nav-section').clientHeight) {
    $(".sidebar-nav-categories").slideToggle(); 
    $('.categories-btn-icon').toggleClass("angle-rotated");
  }else{
    $(".sidebar-nav-categories").slideUp();
    $('.categories-btn-icon').removeClass("angle-rotated");
    
  }
});
$(document).on('click', function(event){
  if(!$(".categories-btn, .categories-btn-v2").is(event.target) && $(".sidebar-nav-categories").has(event.target).length == 0){
    $(".sidebar-nav-categories").slideUp();
    $('.categories-btn-icon').removeClass("angle-rotated");
  }
});
let position = $(window).scrollTop(); 
$(window).on('scroll', function(){
  $(".sidebar-nav-categories").slideUp();
  
  let scroll = $(window).scrollTop();
    if(scroll > position) {
        $('.categories-btn-icon').addClass("angle-rotated");
    } 
    $('.categories-btn-icon').removeClass("angle-rotated");
    position = scroll;
  
});

// Search btn
$(".mbl-search-btn").on("click", function () {
  $(this).siblings(".mbl-search-box-wrapper").slideDown();
});
$(".search-close-btn").on("click", function () {
  $(this).parent().parent(".mbl-search-box-wrapper").slideUp();
});
// categories-btn


// global
$(".slide-sub").on("click", function() {
  $(".slide-toggle-item").toggleClass("d-invisible");
   $(".slide-sub").not($(this)).siblings().toggleClass("d-invisible")
})

// 
$(document).ready(function(){
  justToggleSlide();
  function justToggleSlide(){
    $('.toggle-wrap:first-child').addClass('active');
    $('.toggle-wrap:first-child').find('.toggle-able').slideToggle();
    $('.sub').click(function() {
      $(this).closest('.toggle-wrap').toggleClass('active');
      $(this).closest('.toggle-wrap').find('.toggle-able').stop().slideToggle();
    })
  }
})
// close-btn
$(".close-btn").on("click", function() {
  $(".closeable-item").addClass("d-none");
})

// ********** range slider ***********
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// 
$(".show-hide-password i").on('click', function(event) {
  event.preventDefault();
  if($('.show-hide-password input').attr("type") == "text"){
      $('.show-hide-password input').attr('type', 'password');
      $('.show-hide-password i').addClass( "la-eye-slash" );
      $('.show-hide-password i').removeClass( "la-eye" );
  }else if($('.show-hide-password input').attr("type") == "password"){
      $('.show-hide-password input').attr('type', 'text');
      $('.show-hide-password i').removeClass( "la-eye-slash" );
      $('.show-hide-password i').addClass( "la-eye" );
  }
});


// ********** slick slider ***********

$(".slider-col-1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
});

$(".slider-col-1-with-arrow").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  arrows: true,
  prevArrow: '<span class="preve_arrow slide-arrow"> <i class="las la-angle-left fs-6"></i></span>',
  nextArrow: '<span class="next_arrow slide-arrow"> <i class="las la-angle-right fs-6"></i></span>',
});
// slider row 4
$(".slider-row-4").slick({
  arrows: true,
  infinite: true,
  rows: 4,
  slidesperRow: 2,
  marginTop:50,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: '<span class="preve_arrow slide-arrow"> <i class="las la-angle-left "></i></span>',
  nextArrow: '<span class="next_arrow slide-arrow"> <i class="las la-angle-right "></i></span>',

  responsive: [
    {
      breakpoint: 1380,
      settings: {
        rows: 3,
      },
    },
    
    {
      breakpoint: 576,
      settings: {
        rows: 2,
      },
    },
    
  ],
});
// Slider col-4
$(".slider-col-4").slick({
  arrows: false,
  infinite: true,
  rows: 2,
  slidesperRow: 2,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "30px",
        centerMode: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "45px",
        centerMode: true,
        arrows: false,
      },
    },
  ],
});
// Slider col-5
$(".slider-4").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: '<span class="preve_arrow slide-arrow"> <i class="las la-angle-left "></i></span>',
  nextArrow: '<span class="next_arrow slide-arrow"> <i class="las la-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "30px",
        centerMode: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "45px",
        centerMode: true,
        arrows: false,
      },
    },
  ],
});
// Slider col-5
$(".slider-col-5").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: '<span class="preve_arrow slide-arrow"> <i class="las la-angle-left "></i></span>',
  nextArrow: '<span class="next_arrow slide-arrow"> <i class="las la-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "30px",
        centerMode: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "45px",
        centerMode: true,
        arrows: false,
      },
    },
  ],
});
// Slider col-7
$(".slider-col-7").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow: '<span class="preve_arrow slide-arrow"> <i class="las la-angle-left "></i></span>',
  nextArrow: '<span class="next_arrow slide-arrow"> <i class="las la-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "45px",
        centerMode: true,
        arrows: false,
      },
    },
    // {
    //   breakpoint: 400,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     centerPadding: "45px",
    //     centerMode: true,
    //     arrows: false,
    //   },
    // },
  ],
});
// 


$('.product-details-img').each((index, element)=>{
  $(element).extm({
    position:'right',
    imageSrc: $(this).attr('src'),
    rightPad: 20,
    squareOverlay: true,
    lazy: true,
    zoomLevel: 1,
    zoomSize: 1500,
  }); 
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
  
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  // centerMode: true,
  focusOnSelect: true
});


// 
/* calling script */




AOS.init();
