$(function() {
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