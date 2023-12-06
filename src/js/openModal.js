const bgModal = document.querySelector('.bg_modal')
const modalImage = document.createElement('img')
const containerImageModal = document.querySelector('.modal')

export const openModal = (e) => {
  const { currentSrc } = e.target
  modalImage.src = currentSrc
  bgModal.classList.add('active_modal')
  containerImageModal.appendChild(modalImage)
}
