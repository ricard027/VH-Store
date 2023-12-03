import { Createcomponent } from './createcomponent.js'
import { getProductDetails } from './getproductdetails.js'
import { getProducts } from './getproducts.js'

const buttonRemoveFilter = document.querySelector('.btn_remove_filter')
const list = document.querySelector('.list_items')
const quantityProduct = document.querySelector('.quantity')
const selectItem = document.querySelector('#select')

const products = await getProducts()

let currentProducts = products

const filterItems = (brands) => {
  currentProducts = products.filter(({ brand }) => {
    return brand === brands
  })
  displayProducts()
}

const getSelectedValue = () => {
  const selectedValue = selectItem.value

  if (selectedValue !== 'default') {
    filterItems(selectedValue)
  }
}

buttonRemoveFilter.addEventListener('click', async () => {
  currentProducts = await getProducts()
  return displayProducts()
})

selectItem.addEventListener('change', getSelectedValue)

const setOptions = async () => {
  const uniqueBrands = new Set()

  selectItem.innerHTML = ''

  products.forEach((product) => {
    if (!uniqueBrands.has(product.brand)) {
      uniqueBrands.add(product.brand)

      const optionitem = document.createElement('option')
      optionitem.textContent = product.brand
      optionitem.value = product.brand
      selectItem.appendChild(optionitem)
    }
  })
}

setOptions()

const displayProducts = async () => {
  list.innerHTML = ''

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
    quantityProduct.innerHTML = `${currentProducts.length}`

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
    const listPrice = Createcomponent('p', 'previous_price', product.listPrice)
    const bestPrice = Createcomponent(
      'p',
      'current_price',
      ` R$ ${product.bestPrice}`
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

displayProducts()
