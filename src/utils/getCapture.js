import html2canvas from 'html2canvas'

const getCapture = () => {
  html2canvas(document.querySelector('#capture')).then(canvas => {
    const container = document.querySelector('#downloadImg')

    const preImage = document.querySelector('canvas')
    if (preImage) {
      container.removeChild(preImage)
    }

    container.appendChild(canvas)
  })
}

export { getCapture }
