let btnClick = document.querySelector("LOGIN IN");
btnClick.addEventListener("click", () => {
    window.location.href = "page2.html";
})


document.addEventListener('DOMContentLoaded',() => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click',() => 
        mobileMenu.classList.toggle('active')
    );
});