let orderAmount = document.querySelector(".order-amount");
let inputNumber = document.querySelectorAll(".input_number");
let checkoutQuantity = document.querySelectorAll(".js_quantity");
let counters = Array(inputNumber.length).fill(0) //An array of counters, one counter for each button, all initialized to 0

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