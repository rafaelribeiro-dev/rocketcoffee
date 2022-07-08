const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
/*ABRE O MEMU AO CLICAR NO ICONE HAMBURGUER */
for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
/* ESCONDE MENU AO CLICAR EM ALGUM LINK DO MENU ABERTO*/
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
