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
        if(favoriteEl[i].classList.contains("on")) {
            favoriteEl[i].style.background = "url(images/favorite-blue.png)";
            favoriteEl[i].style.backgroundRepeat = "no-repeat";
            favoriteEl[i].style.backgroundPosition = "center";
            favoriteEl[i].style.backgroundColor = "transparent";
            favoriteEl[i].classList.remove("on");
        } else {
            favoriteEl[i].style.background = "url(images/favorite-white.png)";
            favoriteEl[i].style.backgroundRepeat = "no-repeat";
            favoriteEl[i].style.backgroundPosition = "center";
            favoriteEl[i].style.backgroundColor = "rgb(44, 113, 184)";
            favoriteEl[i].classList.add("on");
        }
    })
}


// if (favoriteEl[i].style.background == "url(images/favorite-white.png)") {
    // }





