import './scss/style.scss'
import 'bootstrap'
import {Popover} from 'bootstrap'
// import Jquery from 'jquery'
// import Swiper from 'swiper';
// import {Navigation, Pagination, EffectFade, Thumbs} from 'swiper/modules';
// import 'swiper/css';

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))

/*
new Swiper('.example-slider', {
  slidesPerView: 5,
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },
  mousewheel: {
    releaseOnEdges: true
  },
})
*/
