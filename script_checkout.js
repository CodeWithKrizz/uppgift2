let orderAmount = document.querySelector(".order-amount");
let inputNumber = document.querySelectorAll(".input_number");
let plusButton = document.querySelectorAll(".plus-button");
let minusButton = document.querySelectorAll(".minus-button");
let trashButton = document.querySelectorAll(".trash");
let checkoutButton = document.querySelector(".checkout_btn");
let checkoutQuantity = document.querySelectorAll(".js_quantity");
let counters = Array(inputNumber.length).fill(0) //An array of counters, one counter for each button, all initialized to 0
let subAndAddCounter = 0;

// Get values from local storage
let counter = localStorage.getItem('counter');
for (let i = 0; i < inputNumber.length; i++){
	counters[i] = localStorage.getItem('counter' + i);
}

orderAmount.innerHTML = counter

function populateCheckout(){
    for (let i = 0; i < inputNumber.length; i++){
        inputNumber[i].setAttribute('value', counters[i])
		checkoutQuantity[i].innerHTML = counters[i]
    }
}

populateCheckout();

function subtractAndAdd (){
    for (let i = 0; i < minusButton.length; i++){
        minusButton[i].addEventListener("click", function(){
            inputNumber.value.innerHTML = subAndAddCounter--;
        });
    }
}
subAndAddCounter();

// function updateCart() {
// 	for (let i = 0; i < btnAddToCart.length; i++) {
// 		btnAddToCart[i].addEventListener("click", function () {
// 			orderAmount.innerHTML = ++counter;
// 			counters[i]++;
// 		});
// 	}
// }
