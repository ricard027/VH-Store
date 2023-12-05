const list = document.querySelector('.list_items')

export const updateItemsPerRow = () => {
  const li = list.querySelector('li')

  const itemWidth = li.offsetWidth

  const itemsPerRow = Math.floor(document.body.offsetWidth / itemWidth)

  let itemsPerRowElement = document.getElementById('itemsPerRow')

  if (!itemsPerRowElement) {
    listContainer.appendChild(itemsPerRowElement)
  }

  itemsPerRowElement.textContent = `Quantidade de produtos por linha: ${itemsPerRow}`
}
