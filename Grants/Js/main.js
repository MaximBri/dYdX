$('.burger-btn').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $(document.body).toggleClass('overflow-hidden')
})
// burger
// mixer
let filters = document.querySelectorAll('#filters button');
filterOne = document.querySelector('#filter');
console.log(filters);
const products = document.querySelectorAll('#products .main__slide');
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
filterOne.addEventListener('click', () => {
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
// mixer
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