const menu = document.querySelector(".menu");

function scrolled() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop != 0) {
        menu.classList.add("menu-scrolled");
    } else {
        menu.classList.remove("menu-scrolled");
    }
}

function subtitleFadeUp() {
    let subtitleAnimation = this.document.querySelectorAll(".subtitle-cont");

    for (let element in subtitleAnimation) {
        let posicionObj = subtitleAnimation[element].getBoundingClientRect().top;
        let tamañoDePantalla = window.innerHeight - 200;

        if (posicionObj < tamañoDePantalla) {
            subtitleAnimation[element].style.animation = 'subTitleApear 1s linear forwards'
        }
    }
}


window.addEventListener('scroll', scrolled);
window.addEventListener('scroll', subtitleFadeUp);

setTimeout(() => {
    window.scrollTo(0, window.innerHeight);
}, 7500);