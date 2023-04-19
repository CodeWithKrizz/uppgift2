let orderAmount = document.querySelector(".order-amount");
let inputNumber = document.querySelectorAll(".input_number");
let plusButton = document.querySelectorAll(".plus-btn");
let minusButton = document.querySelectorAll(".minus-btn");
let trashButton = document.querySelectorAll(".trash");
let checkoutButton = document.querySelector(".checkout_btn");
let checkoutQuantity = document.querySelectorAll(".js_quantity");
let counter = localStorage.getItem("counter");

// localStorage.clear();

// Get values from local storage
let counters = Array(inputNumber.length); //An array of counters, one counter for each button

for (let i = 0; i < inputNumber.length; i++) {
	let temp = localStorage.getItem("counter" + i);
	if (temp != null) {
		//If temp is not null, update the counter
		counters[i] = temp;
	} else {
		counters[i] = 0;
	}
}

function updateLocalStorage() {
	localStorage.setItem("counter", counter);
	for (let i = 0; i < counters.length; i++) {
		localStorage.setItem("counter" + i, counters[i]); //"counteri" -> counters[i]
	}
}

orderAmount.innerHTML = counter;

function populateCheckout() {
	for (let i = 0; i < inputNumber.length; i++) {
		inputNumber[i].setAttribute("value", counters[i]);
		checkoutQuantity[i].innerHTML = counters[i];
	}
}

populateCheckout();

function subtract() {
	for (let i = 0; i < minusButton.length; i++) {
		minusButton[i].addEventListener("click", function () {
			if (counters[i] > 0) {
				counters[i]--;
				counter--;
				populateCheckout();
				orderAmount.innerHTML = counter;
				updateLocalStorage();
			}
		});
	}
}

function add() {
	for (let i = 0; i < plusButton.length; i++) {
		plusButton[i].addEventListener("click", function () {
			counters[i]++;
			counter++;
			populateCheckout();
			orderAmount.innerHTML = counter;
			updateLocalStorage();
		});
	}
}
subtract();
add();
