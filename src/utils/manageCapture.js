import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

const getCapture = () => {
  const container = document.querySelector('#downloadImg')

  const capture = document.querySelector('#capture')
  const preImage = document.querySelector('#Presentation-Img')

  if (preImage) {
    container.removeChild(preImage)
  }

  console.log(capture)

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
