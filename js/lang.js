//Languaje

const btnSwitchLangEn =  document.querySelectorAll('#switch-lang-en');
const btnSwitchLangSp =  document.querySelectorAll('#switch-lang-sp');
const btnSwitchIdiomEn =  document.querySelectorAll('#switch-idiom-en');
const btnSwitchIdiomSp =  document.querySelectorAll('#switch-idiom-sp');
const sp = document.querySelectorAll(".spanish");
const en = document.querySelectorAll(".english");



//DESKTOP BUTTONS
btnSwitchLangSp[0].addEventListener('click', aEspañol);
btnSwitchIdiomEn[0].addEventListener('click', aIngles);

//MOBILE BUTTONS
btnSwitchLangSp[1].addEventListener('click', aEspañol);
btnSwitchIdiomEn[1].addEventListener('click', aIngles);

function aEspañol() {
    for (let i = 0; i < 27; i++) {
        en[i].classList.add("dsp-none");
    }

    for (let i = 0; i < 27; i++) {
        sp[i].classList.remove("dsp-none");
    }
}

function aIngles() {
    for (let i = 0; i < 27; i++) {
        sp[i].classList.add("dsp-none");
    }

    for (let i = 0; i < 27; i++) {
        en[i].classList.remove("dsp-none");
    }
}