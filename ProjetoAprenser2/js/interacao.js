function interacaoMenu() {
    let larguraTela = innerWidth;

    if (larguraTela <= 768) {
        let menu = document.getElementsByClassName('menu')[0];
        let menuToggle = document.getElementById('menu-toggle');

        let menuItens = document.querySelector(".menu > li");

        if (menuItens.click) {
            menuToggle.checked = false;
        }
    }
}


let menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener("click", menuHambuerguer());


function menuHambuerguer() {
    let larguraTela = innerWidth;
    if (larguraTela < 768) {
        let menu = document.getElementsByClassName('menu')[0];
        let iconeMenu = document.getElementsByClassName("icone-hamburguer")[0];

        if (iconeMenu.click) {
            menuToggle.checked = true;
        }
    }
}