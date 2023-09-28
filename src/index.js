import Alpine from 'alpinejs'
import chroma from 'chroma-js'

window.Alpine = Alpine
Alpine.start()

// Constants
const COLOR_SCALE_LENGTH = 11
const BASE_COLOR_INDEX = 6
const COLOR_NAMES = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
const COLOR_CLASSES = ['color', 'flex', 'justify-between', 'px-4', 'py-2', 'rounded', 'text-sm']
const BASE_COLOR_CLASSES = ['outline', 'outline-offset-2', 'outline-2',  'outline-primary-500']

// Elements
const colorInput = document.querySelector('.js-color')
const result = document.querySelector('.js-result')
const submitButton = document.querySelector('.js-submit')

function generateLightestColor(baseColor) {
  return chroma(baseColor).luminance(0.95)
}

function generateDarkestColor(baseColor) {
  return chroma(baseColor).luminance(0.05)
}

function generateColorScale(colorArray) {
  const baseColorDomain = BASE_COLOR_INDEX / 10
  const colorScale = chroma.scale(colorArray).domain([0, baseColorDomain, 1]).mode('lab').colors(COLOR_SCALE_LENGTH)

  return colorScale
}

function showResult(colorScale) {
  for (let i = 0; i < colorScale.length; i++) {
    const strong = document.createElement('strong')
    const span = document.createElement('span')
    const div = document.createElement('div')

    strong.innerHTML = COLOR_NAMES[i]
    span.innerHTML = colorScale[i]

    const textColor = chroma.contrast(colorScale[i], '#FFFFFF') > 4.5 ? '#FFFFFF' : '#000000'

    div.append(strong, span)
    div.classList.add(...COLOR_CLASSES)
    div.style.backgroundColor = colorScale[i]
    div.style.color = textColor

    if (i === BASE_COLOR_INDEX) {
      div.classList.add(...BASE_COLOR_CLASSES)
    }

    result.append(div)
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault()

  let colorArray = []

  colorArray.push(generateLightestColor(colorInput.value))
  colorArray.push(colorInput.value)
  colorArray.push(generateDarkestColor(colorInput.value))

  const colorScale = generateColorScale(colorArray)

  showResult(colorScale)
})
