const bg0 = document.querySelector('.parallax-test--zero')
const bg1 = document.querySelector('.parallax-test--one')
const bg2 = document.querySelector('.parallax-test--two')
const bgEnd = document.querySelector('.parallax-test--end')
// const title = document.querySelector('.title')
const coords = bg1.getBoundingClientRect()
const coords2 = bg2.getBoundingClientRect()
const coords3 = bgEnd.getBoundingClientRect()

window.addEventListener('scroll', function () {
  const coords0 = bg0.getBoundingClientRect()
  // console.log(coords2.top + coords0.top / 10)
  bg1.style.top = coords.top + coords0.top + 'px'
  bg2.style.top = coords2.top + coords0.top * 3 + 'px'
  bgEnd.style.top = coords3.top + coords0.top * 3 + 'px'
// title.style.top =
})