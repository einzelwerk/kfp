document.addEventListener('click', (e) => {
  if (e.target.closest('.gallery-grid__play')) {
    e.target.closest('.gallery-grid__item').querySelector('.gallery-grid__image').remove()
    e.target.closest('.gallery-grid__item').querySelector('video').play()
    e.target.remove()
  }
})