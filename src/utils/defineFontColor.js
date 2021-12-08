const defineFontColor = (colorValue) => {
  const convertHexaToRGB = (colorInHexa) => {
    return {
      red: colorInHexa >> 16,
      green: colorInHexa >> 8 & 255,
      blue: colorInHexa & 255
    }
  }

  const colorValueToConvert = `0x${colorValue.substring(1)}`
  console.log(colorValueToConvert)
  const colorInRGB = convertHexaToRGB(colorValueToConvert)
  console.log(colorInRGB)

  if ((colorInRGB.red && colorInRGB.green > 150) || (colorInRGB.green && colorInRGB.blue > 150) || (colorInRGB.red > 150 && colorInRGB.blue > 150)) {
    return '#000000'
  }
  return '#ffffff'
}

export { defineFontColor }
