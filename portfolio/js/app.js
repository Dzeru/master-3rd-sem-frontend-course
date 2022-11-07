document.addEventListener("DOMContentLoaded", function (event) {
    const portfolioSlider = new Swiper(".portfolio__slider", {
        // Default parameters
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        observer: true,
        observeParents: true,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
        },
      });
});