export const getProductDetails = async (id) => {
  try {
    const response = await fetch(`https://desafio.xlow.com.br/search/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
