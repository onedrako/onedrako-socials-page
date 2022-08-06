import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

const getCapture = (selector) => {
  const container = document.querySelector('#downloadImg')

  const capture = document.querySelector(`#${selector}`)
  const preImage = document.querySelector('#Presentation-Img')

  if (preImage) {
    container.removeChild(preImage)
  }

  domtoimage.toPng(capture).then(dataUrl => {
    const img = new Image()
    img.src = dataUrl
    img.id = 'Presentation-Img'
    document.querySelector('#downloadImg').appendChild(img)
  }).catch(err => {
    console.error(err)
  })
}

const downloadCapture = () => {
  domtoimage.toBlob(document.getElementById('Presentation-Img'))
    .then(function (blob) {
      window.saveAs(blob, 'Presentation-Img.png')
    })
}

export { getCapture, downloadCapture }
