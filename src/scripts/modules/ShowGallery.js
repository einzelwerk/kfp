document.addEventListener('click', (e) => {
  if (e.target.closest('.js-show-gallery')) {
    e.target.closest('.category-tabs__content').querySelectorAll('.gallery-grid__col').forEach(t => {
      t.classList.add('gallery-grid__col_active')
    })
    e.target.remove()
  }
})