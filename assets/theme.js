/*
   ========
      Utils
   ========
*/
// Add class when scroll
window.addEventListener('scroll', function () {

    let scrolled_elements = document.querySelectorAll('.scroll');

    scrolled_elements.forEach((element) => {
        element.classList.toggle('scrolled', window.scrollY > 0);
    });
});


/*
   ==========
      Swipers
   ==========
*/
const progress_bar = document.querySelector('.progress-bar');
const hero_swiper = new Swiper('.swiper-hero', {
    loop: true,

    slidesPerView: 1,
    // disableOnInteraction: true,

    autoplay: {
        delay: 5500,
    },

    on: {
        autoplayTimeLeft(swiper, time, progress) {
            progress_bar.animate({
                // opacity: `${1 - progress}`,
                width: `${(1 - progress) * 100}%`
            }, {
                duration: time / 1000,
                fill: 'forwards',
                easeing: 'easeInOutQuad'
            })
        }
    }
});

let next_button_hero = document.querySelector('.swiper-hero-arrows .next');
next_button_hero.addEventListener('click', () => {
    hero_swiper.slideNext();
});
let prev_button_hero = document.querySelector('.swiper-hero-arrows .prev');
prev_button_hero.addEventListener('click', () => {
    hero_swiper.slidePrev();
});

const testimonials_slider = new Swiper('.swiper-testimonials', {
    loop: true,
    
    slidesPerView: 1,

    autoplay: {
        delay: 5500,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
});

let next_button_testimonials = document.querySelector('.swiper-testimonials-arrows .next');
next_button_testimonials.addEventListener('click', () => {
    testimonials_slider.slideNext();
})
let prev_button_testimonials = document.querySelector('.swiper-testimonials-arrows .prev');
prev_button_testimonials.addEventListener('click', () => {
    testimonials_slider.slidePrev();
})