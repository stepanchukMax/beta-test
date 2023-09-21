document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    mySwiper.autoplay.start();
});