/* abre e fecha o menu quando clickar no icone do nav*/
const nav = document.querySelector('#header nav')
const nave = document.querySelector('main')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

for(const element of toggle) {
    element.addEventListener('click', function() {
        nave.classList.toggle('show')
    })
}
/* quando clickar em um item do menu, fechar menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* scrollreveal: mostrar elementos quando der scroll */
const sr = ScrollReveal();

sr.reveal('.text, .toggle, .hlistlogo, .mcd-tile', {
origin: 'top',
distance: '50px',
duration: 2000,
scale: 0.5,
reset: true
    })


