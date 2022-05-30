const menu = document.querySelector(".menu");

function scrolled() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop != 0) {
        menu.classList.add("menu-scrolled");
    } else {
        menu.classList.remove("menu-scrolled");
    }
}

window.addEventListener('scroll', scrolled);