let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

// let favoriteEl = document.querySelectorAll(".favorite-icon");
// for (let i=0; i<favoriteEl.length; i++) {
//     favoriteEl[i].addEventListener("click", function() {
//         if(favoriteEl[i].classList.contains("on")) {
//             favoriteEl[i].style.background = "url(images/favorite-blue.png)";
//             favoriteEl[i].style.backgroundRepeat = "no-repeat";
//             favoriteEl[i].style.backgroundPosition = "center";
//             favoriteEl[i].style.backgroundColor = "transparent";
//             favoriteEl[i].classList.remove("on");
//         } else {
//             favoriteEl[i].style.background = "url(images/favorite-white.png)";
//             favoriteEl[i].style.backgroundRepeat = "no-repeat";
//             favoriteEl[i].style.backgroundPosition = "center";
//             favoriteEl[i].style.backgroundColor = "rgb(44, 113, 184)";
//             favoriteEl[i].classList.add("on");
//         }
//     })
// }

// по уроку
// let testBtns = document.querySelectorAll(".test");

// testBtns.addEventListener("click", function() {
//     alert("hello");
// })

// testBtns.addEventListener("click", function() {
//     alert("bye");
// })

// testBtns.forEach((el) => {
//     el.addEventListener("click", function() {
//         alert("hello");
//     })
// })

// like

let likeBtns = document.querySelectorAll(".favorite-icon");

likeBtns.forEach((item) => {
    item.addEventListener("click", function() {
        // if(item.classList.contains("liked")) {
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked");
        // }
        item.classList.toggle("liked");
    })
})

// modal

let moreDetails = document.querySelectorAll(".details-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

moreDetails.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})

function closeModal(e) {
    e.preventDefault();
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);









