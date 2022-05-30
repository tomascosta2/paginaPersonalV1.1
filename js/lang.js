//Languaje

const btnSwitchLangEn =  document.querySelector('#switch-lang-en');
const btnSwitchLangSp =  document.querySelector('#switch-lang-sp');
const btnSwitchIdiomEn =  document.querySelector('#switch-idiom-en');
const btnSwitchIdiomSp =  document.querySelector('#switch-idiom-sp');
const sp = document.querySelectorAll(".spanish");
const en = document.querySelectorAll(".english");

// console.log(sp);

// for (let elemento in sp) {
//     console.log(sp[elemento]);
// }


btnSwitchLangSp.addEventListener('click', e => {

    // alert("ESPAÑOL");

    // for (let elemento in en) {
    //     en[elemento].classList.add("dsp-none");
    // }

    for (let i = 0; i < 27; i++) {
        en[i].classList.add("dsp-none");
    }

    // for (let elemento in sp) {
    //     sp[elemento].classList.remove("dsp-none");
    // }

    for (let i = 0; i < 27; i++) {
        sp[i].classList.remove("dsp-none");
    }

});

btnSwitchIdiomEn.addEventListener('click', e => {

    // alert("INGLES");
    
    for (let i = 0; i < 27; i++) {
        sp[i].classList.add("dsp-none");
    }

    for (let i = 0; i < 27; i++) {
        en[i].classList.remove("dsp-none");
    }

});


for (let elemento in en) {
    // en[elemento].classList.remove("english");
}