const hamburger = document.querySelector('.menu')
const menu = document.querySelector('nav')
const close = document.querySelector('.closeMenu')
console.log(menu)

const navi = () => {
  menu.classList.add('active')
}
const naviClose = () => {
  menu.classList.remove('active')
}

hamburger.addEventListener('click', navi)
close.addEventListener('click', naviClose)
