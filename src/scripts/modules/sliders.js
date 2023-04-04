import Swiper from 'swiper';
import { classNames } from '../utils/classNames';

import 'swiper/css/bundle';

export function initBenefitsSlider() {
  const sliderClass = classNames.slider.benefits.slider;
  const sliderProgressBlock = classNames.slider.benefits.progress;
  const sliderProgressFillClass = classNames.slider.benefits.progressFill;
  const sliderProgressTotalClass = classNames.slider.benefits.progressTotal;

  const swiper = new Swiper(`.${sliderClass}`, {
    spaceBetween: 20,
    speed: 1000,
    keyboard: true,
    rewind: true,
  });

  const progressBlock = document.querySelector(`.${sliderProgressBlock}`);
  const fill = progressBlock.querySelector(`.${sliderProgressFillClass}`);
  const total = progressBlock.querySelector(`.${sliderProgressTotalClass}`);

  total.textContent = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;

  function handler() {
    const progress = (swiper.activeIndex + 1) / swiper.slides.length;
    fill.style.width = `${progress * 100}%`;
  }

  swiper.on('slideChange', handler);
  handler();

  return swiper;
}
