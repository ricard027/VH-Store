const list = document.querySelector('.list_items')

const updateDOM = () => {
  list.classList.add('grid-cols-5')
  list.classList.remove('grid-cols-2')
}

const checkScreenWidth = () => {
  const screenWidth = window.innerWidth

  if (screenWidth > 1440) {
    updateDOM()
  }
}

checkScreenWidth()

window.addEventListener('resize', checkScreenWidth)
