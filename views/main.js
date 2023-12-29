const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");
const header = document.querySelector("header");

iconToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    });
});

// Change background Headers when scrolling
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
/* Hero type effect  */
const typed = document.querySelector(".typed");
if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    })
}

