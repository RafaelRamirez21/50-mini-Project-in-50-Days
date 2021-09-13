const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
console.log(nav.offsetHeight)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 190) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}