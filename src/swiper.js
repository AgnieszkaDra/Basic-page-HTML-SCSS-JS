
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
        let labels = ['&#xB7;', '&#xB7;', '&#xB7;'];
        
        let swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
          centerInsufficientSlides: true,
          effect: 'creative',
          creativeEffect: {
            prev: {
             translate: ['-150%', 0, 0],
            },
            next: {
                translate: ['150%', 0, 0],
            },
          },
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            pagination: {
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
      
        