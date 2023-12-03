export const Createcomponent = (element, className, text) => {
  const component = document.createElement(element)
  component.classList.add(className)
  component.textContent = text

  return component
}
