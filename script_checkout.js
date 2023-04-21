const listItems = [
	{
		name: "Leica II",
		id: "leica",
		description:
			"Amazing static camera, now with improved white balance and stability on video 4k mode.",
		price: 27499,
		unit: "$",
	},
	{
		name: "Pronto",
		id: "pronto",
		description: "The sleek design makes it easy to carry and handle.",
		price: 99,
		unit: "$",
	},
	{
		name: "Reflekta II",
		id: "reflekta",
		description:
			"Capturing stunning, high-quality photos has never been easier.",
		price: 2499,
		unit: "$",
	},
	{
		name: "Nikon D7500",
		id: "nikon",
		description:
			"With advanced autofocus technology, you'll never miss a shot.",
		price: 1099,
		unit: "$",
	},
	{
		name: "Fujifilm X-10",
		id: "fujifilm",
		description:
			"Shoot in any lighting condition with confidence and clarity.",
		price: 449,
		unit: "$",
	},
	{
		name: "Canon",
		id: "canon",
		description:
			"Share your favorite moments instantly with built-in WiFi connectivity.",
		price: 249,
		unit: "$",
	},
];

let shoppingList = {};
let cardTitle = document.querySelectorAll(".card-title");
let cardText = document.querySelectorAll(".card-text");
let checkoutProducts = document.querySelectorAll(".js_products");
let checkoutCost = document.querySelectorAll(".js_cost");
function initShoppingList() {
	for (let i = 0; i < listItems.length; i++) {
		shoppingList[shoppingList.name] = 0;
		cardTitle[i].innerHTML =
			listItems[i].name +
			`<span class="product-price">${listItems[i].unit}${listItems[i].price}</span>`;
		cardText[i].innerHTML = listItems[i].description;

		checkoutProducts[i].innerHTML = listItems[i].name;
		checkoutCost[i].innerHTML = listItems[i].unit + listItems[i].price;
	}
}
initShoppingList();

let orderAmount = document.querySelector(".order-amount");
let inputNumber = document.querySelectorAll(".input_number");
let plusButton = document.querySelectorAll(".plus-btn");
let minusButton = document.querySelectorAll(".minus-btn");
let trashButton = document.querySelectorAll(".trash");
let checkoutButton = document.querySelector(".checkout_btn");
let checkoutQuantity = document.querySelectorAll(".js_quantity");
let counter = localStorage.getItem("counter");
let tableRows = document.querySelectorAll(".table tbody tr");
// let totalAmount = document.querySelector(".js_total");
let totalProductPrice = document.querySelector(".total-product-price");
//localStorage.clear();
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
		//console.log("here", counters[i]);
		inputNumber[i].setAttribute("value", counters[i]);
		checkoutQuantity[i].innerHTML = counters[i];
	}
}

populateCheckout();
deleteEmptyRows();

function subtract() {
	for (let i = 0; i < minusButton.length; i++) {
		minusButton[i].addEventListener("click", function () {
			if (counters[i] > 0) {
				counters[i]--;
				counter--;
				orderAmount.innerHTML = counter;
				populateCheckout();
				updateLocalStorage();
				deleteEmptyRows();
			}
		});
	}
}

function add() {
	for (let i = 0; i < plusButton.length; i++) {
		plusButton[i].addEventListener("click", function () {
			if (counters[i] == 0) {
				tableRows[i].style.display = "";
			}
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
trashDelete();

function deleteEmptyRows() {
	for (let i = 0; i < counters.length; i++) {
		if (counters[i] == 0) {
			tableRows[i].style.display = "none";
		}
	}
}

function trashDelete() {
	for (let i = 0; i < trashButton.length; i++) {
		trashButton[i].addEventListener("click", function () {
			counter -= counters[i];
			counters[i] = 0;
			populateCheckout();
			orderAmount.innerHTML = counter;
			updateLocalStorage();
			deleteEmptyRows();
		});
	}
}

let checkbox = document.querySelector("#vat-checkbox");
function calculateTotal() {
	let totalPrice = 0;
	for (let i = 0; i < listItems.length; i++) {
		if (checkbox.checked) {
			let totalPriceWithVAT = counters[i] * (listItems[i].price * 1.25);
			totalPrice += totalPriceWithVAT;
		} else {
			let productTotalPrice = counters[i] * listItems[i].price;
			totalPrice += productTotalPrice;
		}
	}

	totalProductPrice.innerHTML = `Your total is: <span class="js_total">$${totalPrice}</span>`;
}
checkoutButton.addEventListener("click", calculateTotal);

