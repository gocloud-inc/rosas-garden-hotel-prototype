import * as Turbo from "@hotwired/turbo";
import { Modal, Dropdown } from "bootstrap";
import Button from "./buttons";
import Greeting from "./greeting";
import Theme from "./theme";
import Header from "./header";

import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

Aos.init();

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const turboLoad = () => {
    
    // init Swiper:
    const swiperParners = new Swiper('.swiper-partners', {
        initialSlide: 6,
        slidesPerView: 6,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        },
        centeredSlides: true,
        centeredSlidesBounds: true,
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

     // init Swiper:
    const swiperBanners = new Swiper('.swiper-banners', {
        centeredSlides: true,
        centeredSlidesBounds: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    Button.apply(Button);
    Greeting.apply(Greeting);
    Theme.apply(Theme);
    Header.apply(Header);
}

document.addEventListener("turbo:load", turboLoad);