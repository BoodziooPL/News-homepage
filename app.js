const hamburger = document.querySelector('.menu')
const menu = document.querySelector('nav')
const close = document.querySelector('.closeMenu')


const navi = () => {
  menu.classList.add('active')
}
const naviClose = () => {
  menu.classList.remove('active')
 
}

hamburger.addEventListener('click', navi)
close.addEventListener('click', naviClose)
