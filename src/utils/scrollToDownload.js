const scrollToDownload = () => {
  const button = document.querySelector('#download-button')
  console.log(button)
  button.scrollIntoView()
}

export { scrollToDownload }
