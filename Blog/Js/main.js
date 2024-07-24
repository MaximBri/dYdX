$('.burger-btn').on('click', function () {
  $('.burger-menu').toggleClass('hidden')
  $(document.body).toggleClass('overflow-hidden')
})
// burger-menu
// mixer
const filters = document.querySelectorAll('#filters button');
const products = document.querySelectorAll('#products .product');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
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