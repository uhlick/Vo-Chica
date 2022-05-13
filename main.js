/* abre e fecha o menu quando clickar no icone do nav*/
const nav = document.querySelector('#header nav')
const main = document.querySelector('main')
const about = document.querySelector('section')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        about.classList.toggle('show')
        nav.classList.toggle('show')
        main.classList.toggle('show')
    })
}
/* quando clickar em um item do menu, fechar menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
        main.classList.remove('show')
        about.classList.remove('show')
    })
}

/* scrollreveal: mostrar elementos quando der scroll */
const sr = ScrollReveal();

sr.reveal('.text, .toggle, .hlistlogo', {
origin: 'top',
distance: '70px',
duration: 1000,
scale: 0.9,
reset: false
    })

sr.reveal('.column4, .column2, .about-img', {
origin: 'left',
distance: '50px',
duration: 1200,
reset: false
    })

sr.reveal('.column3, .about-text, .column1', {
origin: 'right',
distance: '50px',
duration: 1200,
reset: false
    })




