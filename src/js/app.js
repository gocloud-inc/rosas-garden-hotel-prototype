import { Modal, Dropdown } from "bootstrap";
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
const swiperAccomodation = new Swiper('.swiper-accomodation', {
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

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    let header = document.querySelector(".header");

    if (header) {
        // Add an event listener to the window for when it is scrolled
        window.addEventListener('scroll', function() {
            // Check if the page has been scrolled more than 20 pixels
            if (window.scrollY > 20) {
                // Add the "sticky" class to the header
                header.classList.add("sticky");
            } else {
                // Remove the "sticky" class from the header
                header.classList.remove("sticky");
            }
        });
    }

    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        this.classList.toggle('active');

        const bar = document.querySelectorAll('.bar');
        bar.forEach((index) => {
            index.classList.toggle('background-dark');
        })

        const navMenuElement = document.querySelector('.nav-menu');
        navMenuElement.classList.toggle('show');
    });
});
