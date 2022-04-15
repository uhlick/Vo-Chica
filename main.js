/* abre e fecha o menu quando clickar no icone do nav*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
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
const scrollReveal = ScrollReveal({
    duration: 2000,
    reset: true
})

scrollReveal.reveal('#home .text')

const scrollRevealToggle = ScrollReveal({
    duration: 1000,
    reset: false
})

scrollRevealToggle.reveal('.toggle, .logo')



