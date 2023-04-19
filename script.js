// JS-kod att utgå från i denna inlämningsuppgift
const listItems = [
	{
		name: "Leica II",
		id: "leica",
		description:
			"The Leica II is a classic 35mm rangefinder camera made by Leica between 1932-1948. It showcases swappable lenses, a rangefinder focus mechanism, and an integrated viewfinder. Recognized for top-notch optics, workmanship, and historic value, the Leica II is very collectible and might be costly.",
		price: 27499,
		unit: "$",
	},
	{
		name: "Pronto",
		id: "pronto",
		description:
			"The Pronto is a vintage point-and-shoot camera made by VEB Pentacon in the 1960s and 1970s. It features a fixed 45mm lens with f/2.8 aperture, a built-in selenium meter, and uses 35mm film. While it lacks advanced features, the Pronto can produce decent images and is popular among vintage camera enthusiasts.",
		price: 99,
		unit: "$",
	},
	{
		name: "Reflekta II",
		id: "reflekta",
		description:
			"The Reflekta II is an old folding camera created by Wirgin during the 1950s. It utilizes 120 roll film, features a set 105mm lens with f/4.5 aperture and a 1/200th shutter pace. The device also includes an integrated extinction meter for exposure adjustments. Reflekta II is a favorite among vintage camera collectors.",
		price: 2499,
		unit: "$",
	},
	{
		name: "Nikon D7500",
		id: "nikon",
		description:
			"The Nikon D7500 is a remarkable DSLR camera for enthusiasts and pros. It features a 20.9MP sensor, 51-point AF system, and ISO range of 100-51,200. The camera can shoot at 8fps and records 4K UHD video at 30fps. Plus, it has built-in Wi-Fi and Bluetooth, easing photo/video transfer to devices.",
		price: 1099,
		unit: "$",
	},
	{
		name: "Fujifilm X-10",
		id: "fujifilm",
		description:
			"The Fujifilm X-10, a superb compact camera, boasts a 12MP sensor, speedy Fujinon lens offering 4x optical zoom, and user-friendly manual settings. Additionally, it includes OIS, Full HD video capabilities, and swift continuous shooting functionality.",
		price: 449,
		unit: "$",
	},
	{
		name: "Canon",
		id: "canon",
		description:
			"The Canon 40mm lens is a compact and lightweight prime lens that is designed for Canon EF and EF-S mount cameras. It uses Canon's STM autofocus system, has a minimum focusing distance of just 0.3 meters, and a seven-blade circular aperture.",
		price: 249,
		unit: "$",
	},
];

let shoppingList = {};
let cardTitle = document.querySelectorAll(".card-title");
let cardDescription = document.querySelectorAll(".card-description");
function initShoppingList() {
	for (let i = 0; i < listItems.length; i++) {
		console.log(listItems[i]);
		shoppingList[shoppingList.name] = 0;

		cardTitle[i].innerHTML =
			listItems[i].name +
			`<span class="price-span">${listItems[i].unit}${listItems[i].price}</span>`; // Remember to remove the span elements from the html because I added them here instead.
		cardDescription[i].innerHTML = listItems[i].description;

		console.log(cardTitle[i]);
	}
}

window.onload = function () {
	// funktioner anropas här
	initShoppingList();
};
// Slut på JS-koden att utgå från.

// Detta skapar en variabel med alla navigations länkar och loopar igenom dem. För varje klick på en länk, så ska en funktion kallas på som utför koden: att loopa igenom alla element och ta bort klassnamnet .active-link för varje gång en navlänk klickas på och sen ska samma klass läggas till på just den länken som det klickades på. På så sätt ser vi till så att bara ett element kan ha klassen .active-link åt gången. // Jessica
let navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", function () {
		for (let j = 0; j < navLink.length; j++) {
			navLink[j].classList.remove("active-link");
		}
		navLink[i].classList.add("active-link");
	});
}

let btnAddToCart = document.querySelectorAll(".btn-add-to-cart");
let orderAmount = document.querySelector(".order-amount");
let totalAmount = document.querySelector(".js_total");
// let inputNumber = document.querySelectorAll(".input_number");
let cardText = document.querySelectorAll(".card-text");
// key -> value, "counter" -> 10 .setItem("key", 6), getItem("key")
let counter = localStorage.getItem("counter");
let counters = Array(btnAddToCart.length); //An array of counters, one counter for each button

//Read from local storage, make sure that the counters are not null.
for (let i = 0; i < counters.length; i++) {
	let temp = localStorage.getItem("counter" + i);
	if (temp != null) {
		counters[i] = temp;
	} else {
		counters[i] = 0;
	}
}

orderAmount.innerHTML = counter;

function updateCart() {
	for (let i = 0; i < btnAddToCart.length; i++) {
		btnAddToCart[i].addEventListener("click", function () {
			orderAmount.innerHTML = ++counter;
			counters[i]++;
		});
	}
}

updateCart();

document.querySelectorAll(".bag").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const url = e.target.parentElement.href;

		//Store counters in local storage
		localStorage.setItem("counter", counter);
		for (let i = 0; i < btnAddToCart.length; i++) {
			localStorage.setItem("counter" + i, counters[i]);
		} // loop over the six counters and counteri -> counters[i]
		window.location.href = url;
	});
});
