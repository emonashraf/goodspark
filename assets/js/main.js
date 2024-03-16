$(".custom-select-selected-item").on("click", function () {
  $(this).parent().toggleClass("open");
});

$(".custom-select-list-item")
  .on("click", function () {
    $(this).siblings(".custom-select-list-item").removeClass("selected");
    $(this).addClass("selected");
    setSlectedItem($(this));
    $(this).parents(".custom-select").removeClass("open");
  })
  .click();

function setSlectedItem(item) {
  $(item).parents(".custom-select").find(".custom-select-selected-item").text($(item).text());
}

$(document).mouseup(function (e) {
  var container = $(".custom-select");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("open");
  }
});

$(window).scroll(function () {
  $(".custom-select").removeClass("open");
});
// ********** slick slider ***********

$(".slider-col-1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  adaptiveHeight: true,
});
$(".slider-col-5").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
