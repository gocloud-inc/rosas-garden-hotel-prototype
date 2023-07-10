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

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// JavaScript to hide the preloader after the page loads
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});

    
// init Swiper:
const swiperGalleries = new Swiper('.swiper-gallery', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

Fancybox.bind('[data-fancybox="gallery"]', {
    Images: {
        protected: true
    },
});

Button.apply(Button);
Greeting.apply(Greeting);
Theme.apply(Theme);
Header.apply(Header);
