import Swiper, { FreeMode, Navigation, Scrollbar,  } from 'swiper';
import { classNames } from '../utils/classNames';
import { breakpointsMin } from '../utils/breakpoints';

import 'swiper/css/bundle';

function fillSliderProgress(sliderBlock, swiper) {
  const fillClass = classNames.sliderProgress.fill;
  const totalClass = classNames.sliderProgress.total;

  const fill = sliderBlock.querySelector(`.${fillClass}`);
  const total = sliderBlock.querySelector(`.${totalClass}`);

  total.textContent = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

  function handler() {
    const progress = (swiper.activeIndex + 1) / swiper.slides.length;
    fill.style.width = `${progress * 100}%`;
  }

  swiper.on('slideChange', handler);
  handler();
}

export function initBenefitsSlider() {
  const sliderBlockClass = classNames.slider.benefits.sliderBlock;
  const sliderClass = classNames.slider.benefits.slider;

  const swiper = new Swiper(`.${sliderClass}`, {
    spaceBetween: 16,
    speed: 700,
    keyboard: true,
    rewind: true,
  });

  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
  fillSliderProgress(sliderBlock, swiper);

  return swiper;
}

export function initMemorableSlider() {
  const sliderBlockClass = classNames.slider.memorable.sliderBlock;
  const sliderClass = classNames.slider.memorable.slider;

  const swiper = new Swiper(`.${sliderClass}`, {
    modules: [Navigation],
    navigation: {
      prevEl: `.${classNames.slider.memorable.btnPrev}`,
      nextEl: `.${classNames.slider.memorable.btnNext}`,
    },
    spaceBetween: 16,
    speed: 700,
    keyboard: true,
    rewind: true,
  });

  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
  fillSliderProgress(sliderBlock, swiper);

  return swiper;
}

export function initProgramSlider() {
  const sliderClass = classNames.slider.program;

  return new Swiper(`.${sliderClass}`, {
    spaceBetween: 16,
    speed: 700,
    rewind: true,
  });
}

export function initSubscribeSlider() {
  const sliderClass = classNames.slider.subscribe;

  return new Swiper(`.${sliderClass}`, {
    modules: [FreeMode],
    freeMode: true,
    spaceBetween: 16,
    speed: 700,
    rewind: true,
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      [breakpointsMin.md]: {
        slidesPerView: 3.6,
        spaceBetween: 20,
      },
      [breakpointsMin.lg]: {
        slidesPerView: 4.2,
        spaceBetween: 40,
      },
    },
  });
}


export function initTabsSlider() {
  const sliderClass = document.querySelector('.js-tabs-slider');
  return new Swiper(sliderClass, {
    modules: [Scrollbar, FreeMode],
    slidesPerView: 'auto',
   
    scrollbar: {
      el: sliderClass.querySelector('.swiper-scrollbar')
    },
    freeMode: true,
    spaceBetween: 12,
    preventClicksPropagation: true,
    watchSlidesProgress: true,
    breakpoints: {
      [breakpointsMin.md]: {
        scrollbar: false
      },
    },

  })
}