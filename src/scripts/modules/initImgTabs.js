import { classNames } from "../utils/classNames";

export function initAccImgTabs() {
  classNames.imgTabs.forEach(imgTabItem => {
    const classBtn = imgTabItem.btn;
    const classImg = imgTabItem.img;

    const img = document.querySelector(`.${classImg}`)
    document.querySelectorAll(`.${classBtn}`).forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        img.src = btn.dataset.imgSrc;
      })
      if(idx === 0) btn.click()
    })
  })
}