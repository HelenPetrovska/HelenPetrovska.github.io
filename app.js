let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

let favoriteEl = document.getElementsByClassName("favorite-icon");

for (let i=0; i<favoriteEl.length; i++) {
    favoriteEl[i].addEventListener("click", function() {
        if (favoriteEl[i].style.background = "url(images/favorite-blue.png)") {
            favoriteEl[i].style.background = "url(images/favorite-white.png)";
            favoriteEl[i].style.backgroundRepeat = "no-repeat";
            favoriteEl[i].style.backgroundPosition = "center";
            favoriteEl[i].style.backgroundColor = "rgb(44, 113, 184)";
            // favoriteEl[i].classList.add("on");
        }
    })
}

// let favoriteElOn = document.getElementsByClassName("on"); 

// for (let i=0; i<favoriteElOn.length; i++) {
//     favoriteElOn[i].addEventListener("click", function() {
        // if (favoriteEl[i].style.background = "url(images/favorite-white.png)") {
        //     favoriteElOn[i].style.background = "url(images/favorite-blue.png)";
        //     favoriteElOn[i].style.backgroundRepeat = "no-repeat";
        //     favoriteElOn[i].style.backgroundPosition = "center";
        //     favoriteElOn[i].style.backgroundColor = "transparent";
        // } 
//     })

// }




