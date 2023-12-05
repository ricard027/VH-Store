const button = document.getElementById('toggle_button')
const buttonMobile = document.getElementById('toggle_button_mobile')

const list = document.querySelector('ul')
const itemsPerRowElement = document.getElementById('itemsPerRow')

document.addEventListener('DOMContentLoaded', function () {
  let isClicked = false

  button.addEventListener('click', function () {
    isClicked = !isClicked
    list.classList.remove('grid-cols-2')

    if (isClicked) {
      list.classList.add('grid-cols-4')
      list.classList.remove('grid-cols-5')

      itemsPerRowElement.textContent = `Quantidade de produtos por linha: 4`
      return
    }

    list.classList.remove('grid-cols-4')
    list.classList.add('grid-cols-5')
    itemsPerRowElement.textContent = `Quantidade de produtos por linha: 5`
  })

  buttonMobile.addEventListener('click', function () {
    isClicked = !isClicked

    list.classList.remove('grid-cols-4')

    const screenWidth = window.innerWidth

    if (isClicked) {
      list.classList.add('grid-cols-2')
      list.classList.remove('grid-cols-5')
      itemsPerRowElement.textContent = `Quantidade de produtos por linha: 2`
      return
    }

    list.classList.remove('grid-cols-2')
    list.classList.add('grid-cols-5')
    itemsPerRowElement.textContent = `Quantidade de produtos por linha: 1`
  })
})
