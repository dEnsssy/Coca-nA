const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    spaceBetween: 32,
    freeMode: true,
    slidesPerView: 2,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const swiper2 = new Swiper(".comment__slider-main", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    freeMode: true,
    // Navigation arrows
    navigation: {
        nextEl: ".comment__slider-next",
        prevEl: ".comment__slider-prev",
    },
});

