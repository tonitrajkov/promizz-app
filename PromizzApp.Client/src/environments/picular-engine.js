/* global fetch, history, location, requestAnimationFrame, Image */
import 'browsernizr/test/touchevents'
import 'browsernizr'
import serviceWorker from './service-worker'
import Clipboard from 'clipboard'
import gen from 'random-seed'
import faviconBase from './favicon-base.png'

const primaryBase = '#778A99'
const examples = [
  { 'text': 'desert in dubai', 'primary': '#CD7D40', 'secondary': '#E9C6AB', 'colors': [{ 'color': '#CD7D40', 'light': false }, { 'color': '#C18326', 'light': false }, { 'color': '#C87D3C', 'light': false }, { 'color': '#C08040', 'light': false }, { 'color': '#E4A25F', 'light': false }, { 'color': '#B87C45', 'light': false }, { 'color': '#DC9454', 'light': false }, { 'color': '#E65F25', 'light': false }, { 'color': '#A4744C', 'light': false }, { 'color': '#BC7442', 'light': false }, { 'color': '#F59021', 'light': false }, { 'color': '#ECA377', 'light': false }, { 'color': '#CF955F', 'light': false }, { 'color': '#FAAC72', 'light': true }, { 'color': '#BE5D0E', 'light': false }, { 'color': '#DEE3F4', 'light': true }, { 'color': '#BA7330', 'light': false }, { 'color': '#F89127', 'light': false }, { 'color': '#CC945A', 'light': false }, { 'color': '#D4842C', 'light': false }, { 'color': '#CD7D40', 'light': false }, { 'color': '#C18326', 'light': false }, { 'color': '#C87D3C', 'light': false }, { 'color': '#C08040', 'light': false }, { 'color': '#E4A25F', 'light': false }, { 'color': '#B87C45', 'light': false }, { 'color': '#DC9454', 'light': false }, { 'color': '#E65F25', 'light': false }, { 'color': '#A4744C', 'light': false }] },
  { 'text': 'summer', 'primary': '#0CB1F6', 'secondary': '#88D9FB', 'colors': [{ 'color': '#0CB1F6', 'light': false }, { 'color': '#3B90DF', 'light': false }, { 'color': '#DF9238', 'light': false }, { 'color': '#B5AB58', 'light': false }, { 'color': '#94C0EA', 'light': true }, { 'color': '#EBB36D', 'light': true }, { 'color': '#0EBBF6', 'light': false }, { 'color': '#3597D9', 'light': false }, { 'color': '#DEB11E', 'light': false }, { 'color': '#07C4F9', 'light': false }, { 'color': '#F94E76', 'light': false }, { 'color': '#066EF6', 'light': false }, { 'color': '#35A2CA', 'light': false }, { 'color': '#F9A905', 'light': false }, { 'color': '#0682C0', 'light': false }, { 'color': '#0592F3', 'light': false }, { 'color': '#0997AF', 'light': false }, { 'color': '#088FD4', 'light': false }, { 'color': '#1F81DB', 'light': false }, { 'color': '#04C4E4', 'light': false }, { 'color': '#0CB1F6', 'light': false }, { 'color': '#3B90DF', 'light': false }, { 'color': '#DF9238', 'light': false }, { 'color': '#B5AB58', 'light': false }, { 'color': '#94C0EA', 'light': true }, { 'color': '#EBB36D', 'light': true }, { 'color': '#0EBBF6', 'light': false }, { 'color': '#3597D9', 'light': false }, { 'color': '#DEB11E', 'light': false }] },
  { 'text': 'winter', 'primary': '#777E88', 'secondary': '#BBBFC3', 'colors': [{ 'color': '#777E88', 'light': false }, { 'color': '#5A5B95', 'light': false }, { 'color': '#7A7C87', 'light': false }, { 'color': '#526FD0', 'light': false }, { 'color': '#242D4F', 'light': false }, { 'color': '#757272', 'light': false }, { 'color': '#F7CEBE', 'light': true }, { 'color': '#8CB4CB', 'light': false }, { 'color': '#1097D7', 'light': false }, { 'color': '#07A244', 'light': false }, { 'color': '#737B8C', 'light': false }, { 'color': '#E5E4FC', 'light': true }, { 'color': '#B1C6DD', 'light': true }, { 'color': '#E1E3F4', 'light': true }, { 'color': '#DCECFC', 'light': true }, { 'color': '#7D9ED2', 'light': false }, { 'color': '#828487', 'light': false }, { 'color': '#4F7FB9', 'light': false }, { 'color': '#6B7B94', 'light': false }, { 'color': '#0849BC', 'light': false }, { 'color': '#777E88', 'light': false }, { 'color': '#5A5B95', 'light': false }, { 'color': '#7A7C87', 'light': false }, { 'color': '#526FD0', 'light': false }, { 'color': '#242D4F', 'light': false }, { 'color': '#757272', 'light': false }, { 'color': '#F7CEBE', 'light': true }, { 'color': '#8CB4CB', 'light': false }, { 'color': '#1097D7', 'light': false }] },
  { 'text': 'spring', 'primary': '#DE9759', 'secondary': '#F8E8DB', 'colors': [{ 'color': '#DE9759', 'light': false }, { 'color': '#D85523', 'light': false }, { 'color': '#E8BE13', 'light': true }, { 'color': '#D0D02B', 'light': true }, { 'color': '#F0D207', 'light': true }, { 'color': '#D8B31C', 'light': false }, { 'color': '#BED814', 'light': true }, { 'color': '#E62418', 'light': false }, { 'color': '#204DEC', 'light': false }, { 'color': '#A5BE4B', 'light': false }, { 'color': '#D36211', 'light': false }, { 'color': '#CA8A2A', 'light': false }, { 'color': '#F0EAB1', 'light': true }, { 'color': '#CC9497', 'light': false }, { 'color': '#F68AA7', 'light': false }, { 'color': '#969D3F', 'light': false }, { 'color': '#6CB43A', 'light': false }, { 'color': '#E5B899', 'light': true }, { 'color': '#E2C840', 'light': true }, { 'color': '#EEDBC5', 'light': true }, { 'color': '#DE9759', 'light': false }, { 'color': '#D85523', 'light': false }, { 'color': '#E8BE13', 'light': true }, { 'color': '#D0D02B', 'light': true }, { 'color': '#F0D207', 'light': true }, { 'color': '#D8B31C', 'light': false }, { 'color': '#BED814', 'light': true }, { 'color': '#E62418', 'light': false }, { 'color': '#204DEC', 'light': false }] },
  { 'text': 'autumn', 'primary': '#BC6F0C', 'secondary': '#F2A23A', 'colors': [{ 'color': '#BC6F0C', 'light': false }, { 'color': '#D84D2C', 'light': false }, { 'color': '#F1591A', 'light': false }, { 'color': '#F0781C', 'light': false }, { 'color': '#EEA814', 'light': false }, { 'color': '#DA7323', 'light': false }, { 'color': '#F8C458', 'light': true }, { 'color': '#F69057', 'light': false }, { 'color': '#DD692B', 'light': false }, { 'color': '#E29B19', 'light': false }, { 'color': '#CCA10F', 'light': false }, { 'color': '#DF751F', 'light': false }, { 'color': '#FC800B', 'light': false }, { 'color': '#F9BB10', 'light': true }, { 'color': '#DA5414', 'light': false }, { 'color': '#F59C14', 'light': false }, { 'color': '#E5A071', 'light': false }, { 'color': '#E5BD8E', 'light': true }, { 'color': '#DF6A0E', 'light': false }, { 'color': '#D86213', 'light': false }, { 'color': '#BC6F0C', 'light': false }, { 'color': '#D84D2C', 'light': false }, { 'color': '#F1591A', 'light': false }, { 'color': '#F0781C', 'light': false }, { 'color': '#EEA814', 'light': false }, { 'color': '#DA7323', 'light': false }, { 'color': '#F8C458', 'light': true }, { 'color': '#F69057', 'light': false }, { 'color': '#DD692B', 'light': false }] },
  { 'text': 'orange', 'primary': '#FC6404', 'secondary': '#FEB282', 'colors': [{ 'color': '#FC6404', 'light': false }, { 'color': '#FA9809', 'light': false }, { 'color': '#EE9808', 'light': false }, { 'color': '#FCA706', 'light': false }, { 'color': '#F9B10B', 'light': false }, { 'color': '#E4844C', 'light': false }, { 'color': '#F8930C', 'light': false }, { 'color': '#FC7C04', 'light': false }, { 'color': '#FC880B', 'light': false }, { 'color': '#FC5C04', 'light': false }, { 'color': '#F66906', 'light': false }, { 'color': '#F48C0C', 'light': false }, { 'color': '#FC9C04', 'light': false }, { 'color': '#CD7A14', 'light': false }, { 'color': '#FCA404', 'light': false }, { 'color': '#F58408', 'light': false }, { 'color': '#DC940C', 'light': false }, { 'color': '#F45C0C', 'light': false }, { 'color': '#E77521', 'light': false }, { 'color': '#F39E11', 'light': false }, { 'color': '#FC6404', 'light': false }, { 'color': '#FA9809', 'light': false }, { 'color': '#EE9808', 'light': false }, { 'color': '#FCA706', 'light': false }, { 'color': '#F9B10B', 'light': false }, { 'color': '#E4844C', 'light': false }, { 'color': '#F8930C', 'light': false }, { 'color': '#FC7C04', 'light': false }, { 'color': '#FC880B', 'light': false }] },
  { 'text': 'banana', 'primary': '#C9B82C', 'secondary': '#E5DC8A', 'colors': [{ 'color': '#C9B82C', 'light': false }, { 'color': '#F4BA05', 'light': true }, { 'color': '#E4B01A', 'light': false }, { 'color': '#E6AE09', 'light': false }, { 'color': '#CDA634', 'light': false }, { 'color': '#F9D30B', 'light': true }, { 'color': '#DCAC04', 'light': false }, { 'color': '#D09C3F', 'light': false }, { 'color': '#FAD506', 'light': true }, { 'color': '#DCC404', 'light': true }, { 'color': '#FCC404', 'light': true }, { 'color': '#C79A0F', 'light': false }, { 'color': '#FCBC06', 'light': true }, { 'color': '#F7C915', 'light': true }, { 'color': '#EEB50E', 'light': false }, { 'color': '#F9CF4D', 'light': true }, { 'color': '#E3C319', 'light': true }, { 'color': '#F1DD54', 'light': true }, { 'color': '#FCE404', 'light': true }, { 'color': '#E9C329', 'light': true }, { 'color': '#C9B82C', 'light': false }, { 'color': '#F4BA05', 'light': true }, { 'color': '#E4B01A', 'light': false }, { 'color': '#E6AE09', 'light': false }, { 'color': '#CDA634', 'light': false }, { 'color': '#F9D30B', 'light': true }, { 'color': '#DCAC04', 'light': false }, { 'color': '#D09C3F', 'light': false }, { 'color': '#FAD506', 'light': true }] },
  { 'text': 'atlantic ocean', 'primary': '#84C4FC', 'secondary': '#BCDFFD', 'colors': [{ 'color': '#84C4FC', 'light': true }, { 'color': '#76A0C4', 'light': false }, { 'color': '#0CA8CD', 'light': false }, { 'color': '#6DC5D9', 'light': false }, { 'color': '#1F81B6', 'light': false }, { 'color': '#CD8045', 'light': false }, { 'color': '#B7D3F4', 'light': true }, { 'color': '#327DB3', 'light': false }, { 'color': '#BE8E4C', 'light': false }, { 'color': '#233851', 'light': false }, { 'color': '#DCF4FC', 'light': true }, { 'color': '#72DDF0', 'light': true }, { 'color': '#2D9AED', 'light': false }, { 'color': '#FBFAF5', 'light': true }, { 'color': '#2A4C81', 'light': false }, { 'color': '#78B1F4', 'light': false }, { 'color': '#DACAB1', 'light': true }, { 'color': '#27415C', 'light': false }, { 'color': '#4F8CAD', 'light': false }, { 'color': '#0A6A62', 'light': false }, { 'color': '#84C4FC', 'light': true }, { 'color': '#76A0C4', 'light': false }, { 'color': '#0CA8CD', 'light': false }, { 'color': '#6DC5D9', 'light': false }, { 'color': '#1F81B6', 'light': false }, { 'color': '#CD8045', 'light': false }, { 'color': '#B7D3F4', 'light': true }, { 'color': '#327DB3', 'light': false }, { 'color': '#BE8E4C', 'light': false }] },
  { 'text': 'forest', 'primary': '#345C75', 'secondary': '#4E8AAF', 'colors': [{ 'color': '#345C75', 'light': false }, { 'color': '#C3CF8B', 'light': true }, { 'color': '#F2E3C6', 'light': true }, { 'color': '#79853A', 'light': false }, { 'color': '#443E30', 'light': false }, { 'color': '#96A492', 'light': false }, { 'color': '#828360', 'light': false }, { 'color': '#32B921', 'light': false }, { 'color': '#EEDDB6', 'light': true }, { 'color': '#7C8479', 'light': false }, { 'color': '#B9B841', 'light': false }, { 'color': '#F4E5B7', 'light': true }, { 'color': '#81B53A', 'light': false }, { 'color': '#3478AB', 'light': false }, { 'color': '#305A19', 'light': false }, { 'color': '#C8E383', 'light': true }, { 'color': '#6D7032', 'light': false }, { 'color': '#B2CB7C', 'light': true }, { 'color': '#9B9170', 'light': false }, { 'color': '#3B1C33', 'light': false }, { 'color': '#345C75', 'light': false }, { 'color': '#C3CF8B', 'light': true }, { 'color': '#F2E3C6', 'light': true }, { 'color': '#79853A', 'light': false }, { 'color': '#443E30', 'light': false }, { 'color': '#96A492', 'light': false }, { 'color': '#828360', 'light': false }, { 'color': '#32B921', 'light': false }, { 'color': '#EEDDB6', 'light': true }] },
  { 'text': 'water', 'primary': '#1C33B4', 'secondary': '#546AE4', 'colors': [{ 'color': '#1C33B4', 'light': false }, { 'color': '#E4F4FB', 'light': true }, { 'color': '#5186B0', 'light': false }, { 'color': '#4AA4C0', 'light': false }, { 'color': '#5C90B1', 'light': false }, { 'color': '#A0B8DD', 'light': true }, { 'color': '#4BA2C7', 'light': false }, { 'color': '#3788B6', 'light': false }, { 'color': '#6083A9', 'light': false }, { 'color': '#4775AE', 'light': false }, { 'color': '#459BC2', 'light': false }, { 'color': '#7FA6B2', 'light': false }, { 'color': '#599AD4', 'light': false }, { 'color': '#356981', 'light': false }, { 'color': '#ACC4D6', 'light': true }, { 'color': '#5582B7', 'light': false }, { 'color': '#2167D6', 'light': false }, { 'color': '#4396B3', 'light': false }, { 'color': '#3484CC', 'light': false }, { 'color': '#0768A0', 'light': false }, { 'color': '#1C33B4', 'light': false }, { 'color': '#E4F4FB', 'light': true }, { 'color': '#5186B0', 'light': false }, { 'color': '#4AA4C0', 'light': false }, { 'color': '#5C90B1', 'light': false }, { 'color': '#A0B8DD', 'light': true }, { 'color': '#4BA2C7', 'light': false }, { 'color': '#3788B6', 'light': false }, { 'color': '#6083A9', 'light': false }] },
  { 'text': 'dessert', 'primary': '#D4B49D', 'secondary': '#E5D1C3', 'colors': [{ 'color': '#D4B49D', 'light': true }, { 'color': '#CF3C4D', 'light': false }, { 'color': '#CC4C48', 'light': false }, { 'color': '#DFB7A7', 'light': true }, { 'color': '#D9C6AB', 'light': true }, { 'color': '#BD292C', 'light': false }, { 'color': '#75160E', 'light': false }, { 'color': '#F0DDCA', 'light': true }, { 'color': '#D83D57', 'light': false }, { 'color': '#DFA906', 'light': false }, { 'color': '#4F2E22', 'light': false }, { 'color': '#F1FCF5', 'light': true }, { 'color': '#BE835D', 'light': false }, { 'color': '#F0DCCA', 'light': true }, { 'color': '#AC845A', 'light': false }, { 'color': '#CD3A2F', 'light': false }, { 'color': '#DBB298', 'light': true }, { 'color': '#F2DD93', 'light': true }, { 'color': '#2F7BCE', 'light': false }, { 'color': '#EDC92B', 'light': true }, { 'color': '#D4B49D', 'light': true }, { 'color': '#CF3C4D', 'light': false }, { 'color': '#CC4C48', 'light': false }, { 'color': '#DFB7A7', 'light': true }, { 'color': '#D9C6AB', 'light': true }, { 'color': '#BD292C', 'light': false }, { 'color': '#75160E', 'light': false }, { 'color': '#F0DDCA', 'light': true }, { 'color': '#D83D57', 'light': false }] },
  { 'text': 'pride', 'primary': '#FF0000', 'secondary': '#FFE500', 'colors': [{ 'color': '#FF0000', 'light': false }, { 'color': '#FF4D00', 'light': false }, { 'color': '#FF9900', 'light': false }, { 'color': '#FFE500', 'light': true }, { 'color': '#CCFF00', 'light': true }, { 'color': '#80FF00', 'light': true }, { 'color': '#33FF00', 'light': false }, { 'color': '#00FF19', 'light': false }, { 'color': '#00FF66', 'light': false }, { 'color': '#00FFB3', 'light': false }, { 'color': '#00FFFF', 'light': false }, { 'color': '#00B2FF', 'light': false }, { 'color': '#0066FF', 'light': false }, { 'color': '#0019FF', 'light': false }, { 'color': '#3300FF', 'light': false }, { 'color': '#8000FF', 'light': false }, { 'color': '#CC00FF', 'light': false }, { 'color': '#FF00E6', 'light': false }, { 'color': '#FF0099', 'light': false }, { 'color': '#FF004D', 'light': false }, { 'color': '#FF0000', 'light': false }, { 'color': '#FF4D00', 'light': false }, { 'color': '#FF9900', 'light': false }, { 'color': '#FFE500', 'light': true }, { 'color': '#CCFF00', 'light': true }, { 'color': '#80FF00', 'light': true }, { 'color': '#33FF00', 'light': false }, { 'color': '#00FF19', 'light': false }, { 'color': '#00FF66', 'light': false }] },
  { 'text': 'prince', 'primary': '#866099', 'secondary': '#A98DB7', 'colors': [{ 'color': '#866099', 'light': false }, { 'color': '#845F97', 'light': false }, { 'color': '#A688B5', 'light': false }, { 'color': '#9674A8', 'light': false }, { 'color': '#88619B', 'light': false }, { 'color': '#5E436B', 'light': false }, { 'color': '#9673A7', 'light': false }, { 'color': '#9977AA', 'light': false }, { 'color': '#6C4D7B', 'light': false }, { 'color': '#6F507F', 'light': false }, { 'color': '#7C598D', 'light': false }, { 'color': '#6A4C79', 'light': false }, { 'color': '#765587', 'light': false }, { 'color': '#7B588D', 'light': false }, { 'color': '#9673A7', 'light': false }, { 'color': '#916DA3', 'light': false }, { 'color': '#9774A8', 'light': false }, { 'color': '#7F5B91', 'light': false }, { 'color': '#8D67A0', 'light': false }, { 'color': '#87619A', 'light': false }, { 'color': '#866099', 'light': false }, { 'color': '#845F97', 'light': false }, { 'color': '#A688B5', 'light': false }, { 'color': '#9674A8', 'light': false }, { 'color': '#88619B', 'light': false }, { 'color': '#5E436B', 'light': false }, { 'color': '#9673A7', 'light': false }, { 'color': '#9977AA', 'light': false }, { 'color': '#6C4D7B', 'light': false }] }
]

const docHead = document.getElementsByTagName('head')[0]
const form = document.getElementById('form')
const input = document.getElementById('input')
const results = document.getElementById('results')
const loop = document.getElementById('loop')
const grid1 = document.getElementById('grid1')
const searchterm = document.getElementById('searchterm')
const logo = document.getElementById('logo')
const primaryLogo = document.getElementById('primary-logo')
const secondaryLogo = document.getElementById('secondary-logo')
const url = 'https://server.picular.co/'
// const url = 'http://localhost:3000/'

let faviconLink

const amountColors = 20
const gridHeight = grid1.offsetHeight
const gridGap = 35
const loops = [0, gridHeight + gridGap]
const grid2 = grid1.cloneNode(true)
grid2.id = 'grid2'
grid2.style.transform = `translateY(${loops[1]}px)`
loop.appendChild(grid2)

let lastSearch
let exampleTimeout
function exampleSearch (data) {
  const write = (text, length) => {
    if (length <= text.length) {
      input.placeholder = data.text.substr(0, length) + '|'
      exampleTimeout = setTimeout(() => write(text, length + 1), 200)
    } else {
      input.placeholder = data.text

      exampleTimeout = setTimeout(() => {
        setLogoColors(data.primary, data.secondary)

        grid1.className = 'grid'
        grid2.className = 'grid'

        for (let i = 0; i < data.colors.length; i++) {
          grid1.children[i].innerText = data.colors[i].color
          grid2.children[i].innerText = data.colors[i].color
          grid1.children[i].style.backgroundColor = data.colors[i].color
          grid2.children[i].style.backgroundColor = data.colors[i].color
        }

        exampleTimeout = setTimeout(() => {
          let search

          do {
            search = Math.floor(Math.random() * examples.length)
          } while (search === lastSearch)

          exampleSearch(examples[search])
          lastSearch = search
        }, 5000)
      }, 200)
    }
  }

  write(data.text, 0)
}

function startExampleSearch () {
  setLogoColors(null, null)

  clearTimeout(exampleTimeout)
  exampleTimeout = setTimeout(() => {
    let search

    do {
      search = Math.floor(Math.random() * examples.length)
    } while (search === lastSearch)

    exampleSearch(examples[search])
    lastSearch = search
  }, 1000)
}

function stopExampleSearch () {
  clearTimeout(exampleTimeout)
  input.placeholder = 'forest, water, desert and so on...'

  grid1.className = 'grid -loading'
  grid2.className = 'grid -loading'

  for (let i = 0; i < grid1.children.length; i++) {
    grid1.children[i].innerText = ''
    grid2.children[i].innerText = ''
    grid1.children[i].style.backgroundColor = ''
    grid2.children[i].style.backgroundColor = ''
  }
}

function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function generateGrid (query) {
  const random = gen(query)
  const elements = []
  for (let i = 0; i < amountColors; i++) {
    const el = document.createElement('li')
    const height = query === 'chess' ? 1 : random.intBetween(1, 3)
    const loader = document.createElement('div')
    loader.className = 'loader'
    loader.style.animationDelay = `${i * 0.03}s`

    el.className = '-loading'
    el.style.gridRowEnd = (
      height === 1 ? 'span 5'
        : height === 2 ? 'span 7'
          : 'span 9'
    )

    el.appendChild(loader)
    results.appendChild(el)
    elements.push(el)
  }
  return elements
}

function startSearch (query) {
  setLogoColors(null, null)
  stopExampleSearch()
  setTimeout(stopExampleSearch, 50) // Stop after timeout to override blur event

  try {
    if (window.gtag) {
      window.gtag('event', 'search', {
        'event_category': 'search',
        'event_label': query
      })
    }
  } catch (e) {
  }

  query = query.replace(/#/g, '')
  form.className = 'form -active'
  document.body.className = '-active'
  // document.title = 'Picular - ' + query
  document.querySelector('title').innerText = 'Picular - ' + query
  searchterm.className = 'searchterm'
  results.innerText = ''
  searchterm.innerText = query
  searchterm.className = 'searchterm -visible'
  document.activeElement.blur()
  const elements = generateGrid(query)

  fetch(url + query)
    .then(r => r.json())
    .then(({ primary, secondary, colors }) => {
      const times = shuffle(
        Array.from({ length: colors.length }, (_, i) => i * 0.03)
      )

      setLogoColors(primary, secondary)
      results.className = 'results -' + query

      if (process.env.NODE_ENV === 'development') {
        console.log(JSON.stringify({
          text: query,
          primary,
          secondary,
          colors: Array.from({ length: 29 }, (_, i) => {
            let j = i % colors.length
            return { color: colors[j].color, light: colors[j].light }
          })
        }))
      }

      elements.forEach((wrapper, i) => {
        if (!colors[i]) {
          wrapper.parentNode.removeChild(wrapper)
          return
        }

        let { color, img, light } = colors[i]

        wrapper.className = ''
        let el = document.createElement('div')
        el.className = 'inner '
        el.style.backgroundColor = color
        el.className += light ? '-light' : '-dark'
        if (!img) el.className += ' -noimage'
        // el.style.animationDelay = `${i*0.04}s`
        // el.style.animationDelay = `${Math.random()}s`
        // el.style.animationDelay = `${times[i]}s`

        setTimeout(() => {
          el.className += ' -show'
        }, times[i] * 1000)

        let imageWrapper = document.createElement('span')
        imageWrapper.className = 'image'

        let icon = document.createElement('span')
        icon.className = 'icon'
        icon.tabIndex = '1'

        let iconDisable = document.createElement('span')
        iconDisable.className = 'icondisable'
        iconDisable.tabIndex = '1'

        let image = document.createElement('img')
        image.src = img

        imageWrapper.appendChild(icon)
        imageWrapper.appendChild(iconDisable)
        imageWrapper.appendChild(image)
        el.appendChild(imageWrapper)

        let text = document.createElement('p')
        el.appendChild(text)

        let textBtn = document.createElement('button')
        textBtn.setAttribute('type', 'button')
        textBtn.setAttribute('data-clipboard-text', color)
        textBtn.innerText = color
        textBtn.tabIndex = -1
        text.appendChild(textBtn)

        let clipboard = new Clipboard(textBtn)

        clipboard.on('success', (e) => {
          let copied = document.createElement('div')
          copied.className = 'copied'
          copied.innerText = 'Copied to clipboard!'
          el.appendChild(copied)

          setTimeout(() => el.removeChild(copied), 2000)
        })

        wrapper.appendChild(el)
      })
    })
    .catch(err => {
      console.log(err)
    })
}

function updateStateFromUrl () {
  let query = decodeURIComponent(location.pathname.substr(1).replace(/\+/g, '%20'))

  if (!query && location.search && location.search.indexOf('?search=') === 0) {
    let ampersand = location.search.indexOf('&')
    query = location.search.substring('?search='.length, ampersand < 0 ? undefined : ampersand)
    history.replaceState({}, '', query.replace(/%20/g, '+'))
  }

  input.value = query

  if (query) {
    startSearch(query)
  } else {
    form.className = 'form'
    document.body.className = ''
    searchterm.className = 'searchterm'
    results.innerText = ''
    // document.title = 'Picular'
    document.querySelector('title').innerText = 'Picular'
  }
}

function setupLoop () {
  let last = -1
  const update = (now) => {
    requestAnimationFrame(update)
    const dt = last < 0 ? 0 : now - last
    last = now

    loops[0] -= dt * 0.02
    loops[1] -= dt * 0.02

    if (loops[0] < -gridHeight - 50 - gridGap) {
      loops[0] = loops[1] + gridHeight + gridGap
    }
    if (loops[1] < -gridHeight - 50 - gridGap) {
      loops[1] = loops[0] + gridHeight + gridGap
    }

    grid1.style.transform = `translateY(${loops[0]}px)`
    grid2.style.transform = `translateY(${loops[1]}px)`
  }
  requestAnimationFrame(update)
}

function hexToRgb (hex) {
  let bigint = parseInt(hex.substr(1), 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  return { r, g, b }
}

function setLogoColors (primary, secondary) {
  if (!primary) {
    primaryLogo.removeAttribute('fill')
    secondaryLogo.removeAttribute('fill')

    primary = primaryBase
    secondary = primaryBase
  } else {
    primaryLogo.setAttribute('fill', primary)
    secondaryLogo.setAttribute('fill', secondary)
  }

  const canvas = document.createElement('canvas')
  canvas.width = 192
  canvas.height = 192

  const primaryRgb = hexToRgb(primary)
  const secondaryRgb = hexToRgb(secondary)

  const img = new Image()
  img.onload = () => {
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let { data } = imgData

    for (let i = 0; i < data.length; i += 4) {
      let rgb = (i <= 25800 * 4 ? primaryRgb : secondaryRgb)
      data[i + 0] = rgb.r
      data[i + 1] = rgb.g
      data[i + 2] = rgb.b
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.putImageData(imgData, 0, 0)

    if (faviconLink) {
      docHead.removeChild(faviconLink)
      faviconLink = null
    } else {
      // If first time creating favicon, suppress favicon.ico
      let suppresser = document.createElement('link')
      suppresser.rel = 'shortcut icon'
      suppresser.type = 'image/x-icon'
      suppresser.href = 'data:image/x-icon;,'
      docHead.appendChild(suppresser)
    }

    faviconLink = document.createElement('link')
    faviconLink.rel = 'shortcut icon'
    faviconLink.type = 'image/x-icon'
    faviconLink.href = canvas.toDataURL()
    docHead.appendChild(faviconLink)

    // document.body.appendChild(canvas)
    // canvas.style.position = 'absolute'
    // canvas.style.top = '0'
    // canvas.style.left = '0'
  }
  img.src = faviconBase
}

window.addEventListener('popstate', updateStateFromUrl)

form.addEventListener('submit', ev => {
  startSearch(input.value)
  history.pushState({}, '', encodeURIComponent(input.value).replace(/%20/g, '+'))
  ev.preventDefault()
})

input.addEventListener('focus', () => {
  const query = decodeURIComponent(location.pathname.substr(1))
  if (!query) {
    setLogoColors(null, null)
    stopExampleSearch()
  }
})
input.addEventListener('blur', () => {
  const query = decodeURIComponent(location.pathname.substr(1))
  if (!query) startExampleSearch()
})

logo.addEventListener('click', () => {
  const query = decodeURIComponent(location.pathname.substr(1))
  if (query) startExampleSearch()

  history.pushState({}, '', '/')
  updateStateFromUrl()
})

startExampleSearch()
updateStateFromUrl()
setupLoop()
serviceWorker()
