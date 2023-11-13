const burger = document.querySelector('.burgerMenu');
const cross = document.querySelector(".crossMenu");


burger.addEventListener("click", openMenu);
cross.addEventListener("click", closeMenu);

function openMenu(){
    const burgerMenu = document.querySelector(".leftMenu");
    const megaMain = document.querySelector(".megaMain");
    
    burgerMenu.style.display = "flex";
    const burgerMenuSize = burgerMenu.offsetWidth;
    megaMain.style.transform = `translateX(${burgerMenuSize}px)`;
    
    burger.style.display = "none";
    cross.style.display = "flex";
}

function closeMenu(){
    const burgerMenu = document.querySelector(".leftMenu");
    const megaMain = document.querySelector(".megaMain");

    burgerMenu.style.display = "none";
    megaMain.style.transform = `translateX(0px)`;

    cross.style.display = "none";
    burger.style.display = "flex";
    location.reload();
}
