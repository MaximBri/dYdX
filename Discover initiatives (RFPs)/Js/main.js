$('.burger-btn').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $(document.body).toggleClass('overflow-hidden')
})
// burger
// mixer
const filters = document.querySelectorAll('#filters button');
            const products = document.querySelectorAll('#products .product');
            filters.forEach(filter => {
              filter.addEventListener('click', () => {
                filters.forEach(btn => btn.classList.remove('mixer-active'));
                filter.classList.add('mixer-active');
                const category = filter.dataset.filter;
                products.forEach(product => {
                  if (category == 'all' | product.dataset.category == category) {
                    product.style.transform = 'scale(1)';
                    product.style.opacity = '1';
                    product.style.visibility = 'visible';
                    product.style.position = 'static';
                  } else {
                    product.style.transform = 'scale(0)';
                    product.style.opacity = '0';
                    product.style.visibility = 'hidden';
                    product.style.position = 'absolute';
                  }
                });
              });
            });
// mixer
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
