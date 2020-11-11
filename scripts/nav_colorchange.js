const navigation = document.querySelector('nav');
window.onscroll = () => {
    if (this.scrollY <= 600) {
        changeBack();
        navigation.classList.remove('scroll');
    } else {
        change();
        navigation.classList.add('scroll');
    }
};

function change() {
    document.querySelector(".logo img").src = "ikoner/logo_mint.svg";
    document.querySelector(".login").src = "ikoner/profil_mint.svg";
    document.querySelector(".burger_open").src = "ikoner/burger_mint.svg";
    document.querySelector("hr").classList.remove("hide");
}

function changeBack() {
    document.querySelector(".logo img").src = "ikoner/logo_hvid.svg";
    document.querySelector(".login").src = "ikoner/profil_hvid.svg";
    document.querySelector(".burger_open").src = "ikoner/burger_hvid.svg";
    document.querySelector("hr").classList.add("hide");
}
