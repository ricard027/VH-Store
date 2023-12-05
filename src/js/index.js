import { Createcomponent } from './createcomponent.js'
import { getProductDetails } from './getproductdetails.js'
import { getProducts } from './getproducts.js'
import { formatNumber } from './formatnumber.js'
import { updateItemsPerRow } from './updateItensRow.js'

import './updatedom.js'
import './toogle.js'

const list = document.querySelector('.list_items')
const itemsPerRowElement = document.getElementById('itemsPerRow')

const products = await getProducts()

let currentProducts = products

const displayProducts = async () => {
  list.innerHTML = ''

  window.innerWidth < 768
    ? (itemsPerRowElement.textContent = `Quantidade de produtos por linha: 1`)
    : (itemsPerRowElement.textContent = `Quantidade de produtos por linha: 5`)

  currentProducts.forEach(async (product) => {
    currentProducts.find((product) => console.log(product))
    const containerImages = Createcomponent('div', 'container_images')
    const productImage = Createcomponent('img', 'current_image')

    const { items } = await getProductDetails(product.productId)

    items.map(({ images }) => {
      images.forEach(({ imageUrl }) => {
        const imagesInproduct = document.createElement('img')

        imagesInproduct.src = imageUrl
        containerImages.appendChild(imagesInproduct)

        imagesInproduct.addEventListener('click', () => {
          productImage.src = imagesInproduct.src
        })
      })
    })

    const hasPromotion = product.listPrice > product.bestPrice

    const container = Createcomponent('div', 'container', '')
    const listItem = Createcomponent('li')
    const productName = Createcomponent(
      'p',
      'product_name',
      product.productName
    )
    const containerPrice = Createcomponent('div', 'price_content')
    const containerButtons = Createcomponent('div', 'container_btn')
    const promoitem = Createcomponent('p', 'promo', 'OFF')
    const custonButton = Createcomponent('button', 'btn')
    const listPrice = Createcomponent(
      'p',
      'previous_price',
      formatNumber(product.listPrice)
    )
    const bestPrice = Createcomponent(
      'p',
      'current_price',
      ` R$ ${formatNumber(product.bestPrice)}`
    )
    const iconButton = Createcomponent(
      'span',
      'material-symbols-outlined',
      'add'
    )

    productImage.src = product.image
    productImage.alt = product.productName

    listItem.title = `Produto ${product.productName}`
    custonButton.title = 'Adicionar produto'
    promoitem.title = 'Produto em oferta'

    hasPromotion && containerPrice.appendChild(listPrice)
    hasPromotion && listItem.appendChild(promoitem)

    containerButtons.appendChild(custonButton)
    custonButton.appendChild(iconButton)
    container.appendChild(productName)
    containerPrice.appendChild(bestPrice)
    container.appendChild(containerPrice)
    listItem.appendChild(productImage)
    listItem.appendChild(containerImages)
    listItem.appendChild(container)
    listItem.appendChild(containerButtons)
    list.appendChild(listItem)
  })
}
window.addEventListener('load', updateItemsPerRow)

window.addEventListener('resize', updateItemsPerRow)

displayProducts()
