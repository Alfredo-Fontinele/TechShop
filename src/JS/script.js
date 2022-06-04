let navbar = document.querySelector(".header_center");
let button = document.querySelector(".menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

function mudarTema() {
    let main = document.querySelector("main");
    if (main.classList.contains("bg1")) {
        main.classList.remove("bg1");
        main.classList.add("bg2");
    } else {
        main.classList.remove("bg2");
        main.classList.add("bg1");
    }
}