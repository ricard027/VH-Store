export const getProducts = async () => {
  try {
    const response = await fetch('https://desafio.xlow.com.br/search')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
