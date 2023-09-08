console.log('swiper')

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
// const swiper = new Swiper(...);
// let labels = ['&#9733', '&#9733', '&#9733'];
const swiper = new Swiper(".mySwiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    Pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {

            if (labels[index] == null) {
                className = 'null'
                return '<div class="' + className + '">' + '' +
                    '</div>';
            } else {
                return '<div class="' + className + '">' + (labels[index]) +
                    '</div>';
            }

        },
        bulletClass: 'my-custom-pagination-item',
        bulletActiveClass: 'my-custom-pagination-active'
    },
});