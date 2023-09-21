document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 8000, // Таймер на 8 секунд
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // Запускаємо таймер автопрокрутки слайдів
    mySwiper.autoplay.start();
});