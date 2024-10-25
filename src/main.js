import './scss/style.scss'
import 'bootstrap'
import {Popover} from 'bootstrap'
import Jquery from 'jquery'
import Swiper from 'swiper';
import {Navigation, Pagination, EffectFade, Thumbs} from 'swiper/modules';
import 'swiper/css';

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))
