$('.burger-btn').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $(document.body).toggleClass('overflow-hidden')
})
// burger-menu
// slider
var $slider = $('.proj__slider');
var $prevArrow = $('#left');
var $nextArrow = $('#right');
$('.proj__slider').slick({
  arrows: false,
  slidesToShow: 3,
  infinite: false, // loop
  draggable: false,
  dots: false,
  waitForAnimate: true,
  adaptiveHeight: true,
  responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          draggable: true,
          slidesToShow: 1,
        },
      }
    ]
})
$('#left').on('click', function (e) {
  e.preventDefault()
  $('.proj__slider').slick('slickPrev')
})
$('#right').on('click', function (e) {
  e.preventDefault()
  $('.proj__slider').slick('slickNext')
})
setSlideHeight($slider);
// Устанавливаем высоту слайдов
function setSlideHeight($slider) {
  var maxHeight = 0;
  $slider.find('.slick-slide').each(function() {
    var slideHeight = $(this).height();
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight + 50;
    }
  });

  $slider.find('.slick-slide').css('height', maxHeight + 'px');
}
// Скрытие и показ стрелок
$prevArrow.add($nextArrow).on('click', function() {
  toggleArrowVisibility($slider);
});
// Проверяем размер экрана и обновляем количество отображаемых слайдов
toggleArrowVisibility($slider);
function toggleArrowVisibility($slider) {
  var currentSlide = $slider.slick('slickCurrentSlide');
  var totalSlides = $slider.slick('slickGetOption', 'slidesToShow');
  var totalSlides = $slider.slick('slickGetOption', 'slidesToShow');
  if (window.innerWidth < 1101) totalSlides = $slider.slick('slickGetOption', 'slidesToShow', true) + 2;
  else if (window.innerWidth < 751) totalSlides = $slider.slick('slickGetOption', 'slidesToShow', true) + 1;
  if (currentSlide === 0) $prevArrow.addClass('hidden');
  else $prevArrow.removeClass('hidden');
  if (currentSlide >= totalSlides -1) $nextArrow.addClass('hidden');
  else $nextArrow.removeClass('hidden');
}
// slider
// accordeon
$('.quest__box_item-click').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('acc-item-act-bg')
  $(this).children('.acc-plus').toggleClass('acc-active')
  $(this).children('.acc-minus').toggleClass('acc-active')
  $(this).children('.quest__box_item-hid').slideToggle()
})
// accordeon
// animation
const contentBlocks = document.querySelectorAll('.anim'); // класс-указатель на наличие анимации
    function slideInOnScroll() {
      contentBlocks.forEach(block => {
      if (block.getBoundingClientRect().top < window.innerHeight * 0.7) block.classList.add('slow-anim'); // плавное появление
      else block.classList.remove('slow-anim'); // плавное исчезание
      });
    }
    window.addEventListener('scroll', slideInOnScroll);
    window.addEventListener('touchmove', function(event) {
      slideInOnScroll();
    });
// animation