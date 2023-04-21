/* Den här koden deklarerar en array som kallas listItems som innehåller flera objekt som representerar olika kameramodeller. Varje objekt har fyra nyckel-värde-par: name, id, description, price och unit.

Nyckeln name innehåller namnet på kameramodellen som en sträng. Nyckeln id innehåller en unik identifierare för kameramodellen. Nyckeln description innehåller en kort beskrivning av kameramodellen som en sträng. Nyckeln price innehåller priset på kameramodellen som en siffra. Slutligen innehåller nyckeln unit valutasymbolen för priset som en sträng. */
// JS-kod att utgå från i denna inlämningsuppgift
const listItems = [
	{
		// Kamera 1
		name: "Leica II",
		id: "leica",
		description:
			"The Leica II is a classic 35mm rangefinder camera made by Leica between 1932-1948. It showcases swappable lenses, a rangefinder focus mechanism, and an integrated viewfinder. Recognized for top-notch optics, workmanship, and historic value, the Leica II is very collectible and might be costly.",
		price: 27499,
		unit: "$",
	},
	{
		// Kamera 2
		name: "Pronto",
		id: "pronto",
		description:
			"The Pronto is a vintage point-and-shoot camera made by VEB Pentacon in the 1960s and 1970s. It features a fixed 45mm lens with f/2.8 aperture, a built-in selenium meter, and uses 35mm film. While it lacks advanced features, the Pronto can produce decent images and is popular among vintage camera enthusiasts.",
		price: 99,
		unit: "$",
	},
	{
		// Kamera 3
		name: "Reflekta II",
		id: "reflekta",
		description:
			"The Reflekta II is an old folding camera created by Wirgin during the 1950s. It utilizes 120 roll film, features a set 105mm lens with f/4.5 aperture and a 1/200th shutter pace. The device also includes an integrated extinction meter for exposure adjustments. Reflekta II is a favorite among vintage camera collectors.",
		price: 2499,
		unit: "$",
	},
	{
		// Kamera 4
		name: "Nikon D7500",
		id: "nikon",
		description:
			"The Nikon D7500 is a remarkable DSLR camera for enthusiasts and pros. It features a 20.9MP sensor, 51-point AF system, and ISO range of 100-51,200. The camera can shoot at 8fps and records 4K UHD video at 30fps. Plus, it has built-in Wi-Fi and Bluetooth, easing photo/video transfer to devices.",
		price: 1099,
		unit: "$",
	},
	{
		// Kamera 5
		name: "Fujifilm X-10",
		id: "fujifilm",
		description:
			"The Fujifilm X-10, a superb compact camera, boasts a 12MP sensor, speedy Fujinon lens offering 4x optical zoom, and user-friendly manual settings. Additionally, it includes OIS, Full HD video capabilities, and swift continuous shooting functionality.",
		price: 449,
		unit: "$",
	},
	{
		// Kamera 6
		name: "Canon",
		id: "canon",
		description:
			"The Canon 40mm lens is a compact and lightweight prime lens that is designed for Canon EF and EF-S mount cameras. It uses Canon's STM autofocus system, has a minimum focusing distance of just 0.3 meters, and a seven-blade circular aperture.",
		price: 249,
		unit: "$",
	},
];

/* Den här koden definierar en tom JavaScript-objektet "shoppingList" och två variabler som innehåller en nodelist för alla element med klassnamnet "card-title" och "card-description" i HTML-dokumentet.

Funktionen "initShoppingList()" innehåller en for-loop som loopar igenom alla objekt i arrayen "listItems". För varje objekt sätter den värdet för nyckeln "name" i "shoppingList" till 0.

Därefter uppdateras textinnehållet i elementet "cardTitle[i]" med namnet på produkten och dess pris i en span-tag med klassen "price-span". Textinnehållet i elementet "cardDescription[i]" uppdateras också med produkten beskrivning. */
let shoppingList = {};
let cardTitle = document.querySelectorAll(".card-title");
let cardDescription = document.querySelectorAll(".card-description");
function initShoppingList() {
	for (let i = 0; i < listItems.length; i++) {
		shoppingList[shoppingList.name] = 0;

		cardTitle[i].innerHTML =
			listItems[i].name +
			`<span class="price-span">${listItems[i].unit}${listItems[i].price}</span>`;
		cardDescription[i].innerHTML = listItems[i].description;
	}
}

window.onload = function () {
	// funktioner anropas här (kommentar samt kod från lärare)
	initShoppingList();
};
// Slut på JS-koden från lärarna att utgå från.

// Varje element med klassen "nav-link" får en EventListener på "click" som tar bort klassen "active-link" från alla element i navLink-arrayen och lägger till den på det klickade elementet.
// Väljer alla element med klassen "nav-link" och lagrar dem i en variabel.
let navLink = document.querySelectorAll(".nav-link");

// Loopar igenom alla element i navLink-arrayen.
for (let i = 0; i < navLink.length; i++) {
	// Lägger till en klickhändelselyssnare till varje element i arrayen.
	navLink[i].addEventListener("click", function () {
		// Loopar igenom alla element i navLink-arrayen igen.
		for (let j = 0; j < navLink.length; j++) {
			// Tar bort klassen "active-link" från varje element i arrayen.
			navLink[j].classList.remove("active-link");
		}
		// Lägger till klassen "active-link" till det klickade elementet.
		navLink[i].classList.add("active-link");
	});
}

// Hämtar HTML element och lagrar i variablar
let btnAddToCart = document.querySelectorAll(".btn-add-to-cart");
let orderAmount = document.querySelector(".order-amount");
let cardText = document.querySelectorAll(".card-text");

// Hämtar från local storage
let counter = localStorage.getItem("counter");
let counters = Array(btnAddToCart.length); //en array av counters, en counter för varje add to cart knapp.

// Läs från localStorage, se till att counters inte är null
for (let i = 0; i < counters.length; i++) {
	let temp = localStorage.getItem("counter" + i);
	if (temp != null) {
		counters[i] = temp;
	} else {
		counters[i] = 0;
	}
}

orderAmount.innerHTML = counter;

/* Funktion som lägger till EventListener för alla knappar med klassen "btnAddToCart" och uppdaterar varukorgen när en produkt läggs till */
function updateCart() {
	// Loopar igenom alla knappar i btnAddToCart arrayen.
	for (let i = 0; i < btnAddToCart.length; i++) {
		// Lägger till en EventListener för "click" för varje knapp i btnAddToCart-arrayen.
		btnAddToCart[i].addEventListener("click", function () {
			// Ökar counter (antal produkter i varukorgen) med 1 och uppdaterar orderAmount-elementet med det nya värdet.
			orderAmount.innerHTML = ++counter;
			// Ökar räknaren för den aktuella produkten (i) med 1.
			counters[i]++;
		});
	}
}
updateCart(); // Kallar på updateCart-funktionen för att lägga till EventListener för alla "Add to cart"-knappar.

// För varje element med klassen "bag", lägg till en EventListener för "click".
document.querySelectorAll(".bag").forEach((link) => {
	// När användaren klickar på länken, körs denna funktion.
	link.addEventListener("click", (e) => {
		// Förhindrar att länken agerar som en vanlig länk och navigerar till en annan sida.
		e.preventDefault();
		// Sparar href-attributet från länkens parent-element i en variabel.
		const url = e.target.parentElement.href;

		// Lagrar counter (totalt antal produkter i varukorgen) i localStorage.
		localStorage.setItem("counter", counter);
		// Loopar igenom alla knappar i btnAddToCart-arrayen.
		for (let i = 0; i < btnAddToCart.length; i++) {
			// Lagrar varje produkts individuella räknare i localStorage med nyckeln "counter" + index.
			localStorage.setItem("counter" + i, counters[i]);
		}

		// Navigerar till den ursprungliga länkadressen.
		window.location.href = url;
	});
});
