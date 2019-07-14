$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 4000,
    animateOut: "slideOutRight",
    animateIn: "slideInLeft",
  });
});



// nav sticky
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {

  var scrollX = this.scrollY;
  if (scrollX > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});