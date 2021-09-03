const button_open = document.querySelector('.btn')
const input = document.querySelector('.input')


button_open.addEventListener('click', () => {

  input.classList.toggle('active')
  input.focus();



})
