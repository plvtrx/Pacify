// window e um elemento do html da pagina
// quando ele estiver carregado=onload
// vai exercer uma função

window.onload = function () {
    const menu = document.querySelector('.menu-toggle')
    const header = document.querySelector('header')
    const nav = document.querySelector('nav')
    const aside = document.querySelector('aside')
    
    //parametro e significa event
    // o evento é o onclick
    menu.onclick = (e) => {
        //toggle= se não tem a tag on ele adiciona
        //se ele ja tiver ele remove
        header.classList.toggle('on')
        nav.classList.toggle('on')
        aside.classList.toggle('on')
    }
}