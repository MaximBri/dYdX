$('.burger-btn').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $(document.body).toggleClass('overflow-hidden')
})
// burger-menu
// slow animation
const contentBlocks = document.querySelectorAll('.anim'); // класс-указатель на наличие анимации
    function slideInOnScroll() {
      contentBlocks.forEach(block => {
      if (block.getBoundingClientRect().top < window.innerHeight * 0.8) block.classList.add('slow-anim'); // плавное появление
      else block.classList.remove('slow-anim'); // плавное исчезание
      });
    }
    window.addEventListener('scroll', slideInOnScroll);
    window.addEventListener('touchmove', function(event) {
      slideInOnScroll();
    });
// slow animation