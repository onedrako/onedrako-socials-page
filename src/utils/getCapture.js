import domtoimage from 'dom-to-image'

const getCapture = () => {
  const container = document.querySelector('#downloadImg')

  const capture = document.querySelector('#capture')
  const preImage = document.querySelector('#Presentation-Img')

  if (preImage) {
    container.removeChild(preImage)
  }

  domtoimage.toPng(capture).then(dataUrl => {
    const img = new Image()
    img.src = dataUrl
    img.id = 'Presentation-Img'
    console.log(img.src)
    document.querySelector('#downloadImg').appendChild(img)
  }).catch(err => {
    console.error(err)
  })
}

export { getCapture }
