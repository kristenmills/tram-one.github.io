const Tram = require('tram-one')
const app = new Tram({defaultRoute: '/'})

const contact = require('./sections/contact')
const custom = require('./sections/custom')
const example = require('./sections/example')
const header = require('./sections/header')
const install = require('./sections/install')
const actions = require('./sections/actions')
const routing = require('./sections/routing')
const github = require('./sections/github')
const youtube = require('./sections/youtube')
const generator = require('./sections/generator')

const tracking = require('./elements/tracking')

const html = Tram.html({
  contact, custom, example,
  header, install, actions,
  routing, github, tracking,
  youtube, generator
})

const bg = {
  p: '#0fb4d4',
  s: '#fdca47',
  row1: '#0084a3',
  row2: '#1f7389',
  foot: '#52bace'
}

const color = {
  p: '#302f3e',
  s: '#322f3e',
  row1: '#e6ebef',
  row2: '#e6ebef',
  foot: '#302d3c',
}

const home = (state) => {
  return html`
    <div>
      <div class="vhs-top">
        <header   color=${color.p}    bg=${bg.p}></header>
      </div>
      <div class="vhs-bottom vhs-delay-5">
        <install  color=${color.s}    bg=${bg.s}></install>
      </div>
      <div class="vhs-bottom vhs-delay-6">
        <example  color=${color.row1} bg=${bg.row1}></example>
        <routing  color=${color.row2} bg=${bg.row2}></routing>
        <custom   color=${color.row1} bg=${bg.row1}></custom>
        <actions color=${color.row2} bg=${bg.row2}></actions>
        <generator  color=${color.row1} bg=${bg.row1}></generator>
        <youtube  color=${color.row2} bg=${bg.row2}></youtube>
        <github   color=${color.s}    bg=${bg.s}></github>
        <contact  color=${color.foot} bg=${bg.foot}></contact>
      </div>
      <tracking></tracking>
    </div>
  `
}

app.addRoute('/', home)

app.start('.main')
