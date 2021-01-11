$(document).ready(function () {



    let productsCountEl = document.getElementById("products-count");
    let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

    for (let i = 0; i < addToCartBtns.length; i++) {
        addToCartBtns[i].addEventListener("click", function () {
            productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
            quantityValue[i].value = 1;
            toggleButtonState(quantityValue[i].value, decrementButtons[i], incrementButtons[i]);
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
        item.addEventListener("click", function () {
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

    function closeModal(e) {
        e.preventDefault();
        modal.classList.add("hide");
        modal.classList.remove("show");
    }

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }

    moreDetails.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            openModal();
        })
    })

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal(e);
        }
    })

    // product quantity

    // let decrementButtons = document.querySelectorAll(".decrement-button");
    // let incrementButtons = document.querySelectorAll(".increment-button");
    // let quantityValue = document.querySelectorAll(".product-quantity input");
    // let minCount = 1;
    // let maxCount = 5;

    // quantityValue.forEach((item, i) => {
    //     let currentCount = +quantityValue[i].value;
    //     toggleButtonState(currentCount, decrementButtons[i], incrementButtons[i])
    // })

    // function toggleButtonState(count, decrementButton, incrementButton) {
    //     decrementButton.disabled = count <= minCount;
    //     incrementButton.disabled = count >= maxCount;
    // }

    // quantityValue.forEach((item,i) => {
    //     incrementButtons[i].addEventListener("click", function() {
    //         // сокращенно
    //         // quantityValue.value = +quantityValue.value + 1;
    //         let currentCount = +quantityValue[i].value;
    //         let nextCount = currentCount + 1;
    //         quantityValue[i].value = nextCount;
    //         toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
    //     })
    // })

    // quantityValue.forEach((item,i) => {
    //     decrementButtons[i].addEventListener("click", function() {
    //         let currentCount = +quantityValue[i].value;
    //         let nextCount = currentCount - 1;
    //         quantityValue[i].value = nextCount;
    //         toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
    //     })
    // })


    // obj

    // function Car(model,color,year) {
    //     //  створюється обєкт this - const this = {}
    //     this.model = model;
    //     this.color = color;
    //     this.year = year;
    //     console.log(this)
    //     // return this = {}
    // }

    // const audi = new Car("A4", "black", 2015);
    // const au = new Car("A4", "black", 2015);



    // function Calculator (a,b) {
    //     this.a = a;
    //     this.b = b;

    //     this.sum = function() {
    //         return this.a + this.b
    //     }

    //     this.mul = function() {
    //         return this.a * this.b
    //     } 
    // }

    // const calc = new Calculator(2,15);
    // const calc2 = new Calculator(15,15)
    // console.log(calc2.sum());



    // функция крнструктор

    let decrementButtons = document.querySelectorAll(".decrement-button");
    let incrementButtons = document.querySelectorAll(".increment-button");
    let quantityValue = document.querySelectorAll(".product-quantity input");

    function Counter(incrementButton, decrementButton, inputField, minCount, maxCount) {

        // this.incrementButton = incrementButton;
        // this.decrementButton = decrementButton;
        // this.inputField = inputField;
        // // спрощено записати так

        this.domRefs = {
            incrementButton: incrementButton,
            decrementButton,
            inputField,
        }

        this.toggleButtonState = function () {
            let count = +this.domRefs.inputField.value;
            this.domRefs.decrementButton.disabled = count <= minCount;
            this.domRefs.incrementButton.disabled = count >= maxCount;
        }
        this.toggleButtonState();

        this.increment = function () {
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount + 1;
            this.domRefs.inputField.value = nextCount;

            this.toggleButtonState();
        }

        this.decrement = function () {
            let currentCount = +this.domRefs.inputField.value;
            let nextCount = currentCount - 1;
            this.domRefs.inputField.value = nextCount;

            this.toggleButtonState();
        }

        this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
        this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
    }

    let counters = [];
    quantityValue.forEach((count, i) => {
        counters[i] = new Counter(incrementButtons[i], decrementButtons[i], count, 1, 5);
        // this.toggleButtonState(); для 0 попробовать
    })

    // для одного елементу
    // const counter = new Counter(incrementButtons[0],decrementButtons[0],quantityValue[0],1,5);



    // slider

    $('.slider-block').slick({
        dots:true,
    });

    
    // sort

    $('#select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body'
    });

})