/* Den här koden deklarerar en array som kallas listItems som innehåller flera objekt som representerar olika kameramodeller. Varje objekt har fyra nyckel-värde-par: name, id, description, price och unit.

Nyckeln name innehåller namnet på kameramodellen som en sträng. Nyckeln id innehåller en unik identifierare för kameramodellen. Nyckeln description innehåller en kort beskrivning av kameramodellen som en sträng. Nyckeln price innehåller priset på kameramodellen som en siffra. Slutligen innehåller nyckeln unit valutasymbolen för priset som en sträng. */
const listItems = [
	{ // Kamera 1
		name: "Leica II",
		id: "leica",
		description:
			"Amazing static camera, now with improved white balance and stability on video 4k mode.",
		price: 27499,
		unit: "$",
	},
	{ // Kamera 2
		name: "Pronto",
		id: "pronto",
		description: "The sleek design makes it easy to carry and handle.",
		price: 99,
		unit: "$",
	},
	{ // Kamera 3
		name: "Reflekta II",
		id: "reflekta",
		description:
			"Capturing stunning, high-quality photos has never been easier.",
		price: 2499,
		unit: "$",
	},
	{ // Kamera 4
		name: "Nikon D7500",
		id: "nikon",
		description:
			"With advanced autofocus technology, you'll never miss a shot.",
		price: 1099,
		unit: "$",
	},
	{ // Kamera 5
		name: "Fujifilm X-10",
		id: "fujifilm",
		description:
			"Shoot in any lighting condition with confidence and clarity.",
		price: 449,
		unit: "$",
	},
	{ // Kamera 6
		name: "Canon",
		id: "canon",
		description:
			"Share your favorite moments instantly with built-in WiFi connectivity.",
		price: 249,
		unit: "$",
	},
];

//Hämtar alla element från HTML sidan
let shoppingList = {};
let cardTitle = document.querySelectorAll(".card-title");
let cardText = document.querySelectorAll(".card-text");
let checkoutProducts = document.querySelectorAll(".js_products");
let checkoutCost = document.querySelectorAll(".js_cost");
let orderAmount = document.querySelector(".order-amount");
let inputNumber = document.querySelectorAll(".input_number");
let plusButton = document.querySelectorAll(".plus-btn");
let minusButton = document.querySelectorAll(".minus-btn");
let trashButton = document.querySelectorAll(".trash");
let checkoutButton = document.querySelector(".checkout_btn");
let checkoutQuantity = document.querySelectorAll(".js_quantity");
let counter = localStorage.getItem("counter");
let tableRows = document.querySelectorAll(".table tbody tr");
let totalProductPrice = document.querySelector(".total-product-price");
let counters = Array(inputNumber.length); //An array of counters, one counter for each button
// localStorage.clear(); // Detta används för att rensa all data som finns lagrad i webbläsarens localStorage


/* Den här koden utför en loop över ett antal element som heter inputNumber. Loopens längd bestäms av antalet element i inputNumber. Inuti loopen hämtas data från localStorage som är kopplad till varje element.

För varje iteration av loopen hämtas en temporär variabel, temp, som innehåller värdet för counter + det aktuella indexet i. Detta betyder att localStorage söks efter variabelnamnet "counter" + i. Om det finns en sparad data i localStorage för den här variabeln, uppdateras värdet av counters[i] till det sparade värdet. Annars sätts counters[i] till 0.

Detta används för att spara räknare för varje element i inputNumber. Genom att spara värdet i localStorage kan räknaren behållas även när användaren stänger ner webbläsaren och öppnar den igen. Vid en senare tidpunkt kan räknaren sedan hämtas från localStorage och användas för att uppdatera gränssnittet på webbsidan. */
for (let i = 0; i < inputNumber.length; i++) {
	let temp = localStorage.getItem("counter" + i);
	if (temp != null) {
		// Om temp inte är tom, så ska counter uppdateras
		counters[i] = temp;
	} else {
		counters[i] = 0;
	}
}

/* Den här koden definierar en funktion som heter initShoppingList(). Funktionen används för att initialisera en inköpslista baserat på data som finns i listItems.

För varje element i listItems loopar koden igenom och sätter antalet för det aktuella objektet till 0 i inköpslistan shoppingList. Därefter uppdateras HTML-koden för varje element i inköpslistan (cardTitle, cardText, checkoutProducts och checkoutCost) med relevant information från listItems.

cardTitle och cardText uppdateras med produktens namn och beskrivning, medan checkoutProducts och checkoutCost uppdateras med produktens namn och pris. HTML-koden uppdateras också med enheten för prisets valuta (unit).

Slutligen, efter att alla element i listItems har bearbetats, körs initShoppingList()-funktionen för att initialisera inköpslistan när sidan laddas. */
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

/* Den här koden definierar en funktion som heter updateLocalStorage(). Funktionen används för att uppdatera lagringsobjektet localStorage med aktuell räknare och antalet för varje objekt i inköpslistan.

Först sparas den aktuella räknaren counter i localStorage med hjälp av setItem()-metoden och nyckelvärdet "counter".

Därefter loopar koden igenom alla objekt i inköpslistan counters och sparar antalet för varje objekt i localStorage med hjälp av setItem()-metoden och nyckelvärdet "counter" + index i för det aktuella objektet i loopen. */
function updateLocalStorage() {
	localStorage.setItem("counter", counter);
	for (let i = 0; i < counters.length; i++) {
		localStorage.setItem("counter" + i, counters[i]); //"counteri" -> counters[i]
	}
}

orderAmount.innerHTML = counter;

/* Den här koden definierar en funktion som heter populateCheckout(). Funktionen används för att fylla i uppgifter i kassan med den aktuella mängden för varje objekt i inköpslistan.

Koden börjar med en for-loop som itererar över varje objekt i inköpslistan genom att använda längden av inputNumber. Inuti loopen används attributmetoden setAttribute() för att sätta värdet av varje inputNumber-element till motsvarande räknare counters[i]. Därefter sätts innehållet i varje checkoutQuantity[i]-element till motsvarande räknare counters[i]. */
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

/* Funktionen deleteEmptyRows tar bort tomma rader från en tabell genom att loopa igenom arrayen counters och 
gömma raden för varje element i arrayen som är lika med 0. */
function deleteEmptyRows() {
	for (let i = 0; i < counters.length; i++) {
		if (counters[i] == 0) {
			tableRows[i].style.display = "none";
		}
	}
}

/* Funktionen trashDelete lägger till en eventListerner för varje klick på varje trash-knapp på sidan. När man klickar 
på knappen så minskas counter-variabeln med antalet produkter som representeras av counters[i] och counters[i] 
sätts till 0. Sedan kallar funktionen populateCheckout för att uppdatera kundvagnen, orderAmount-elementet uppdateras 
för att visa den nya antalet produkter och updateLocalStorage-funktionen kallas för att uppdatera lokal lagring. 
Slutligen kallas deleteEmptyRows-funktionen för att ta bort eventuellt tomma rader från tabellen. */
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

/* Variabeln checkbox är en referens till HTML-elementet med id #vat-checkbox. Funktionen calculateTotal beräknar den 
totala kostnaden för alla produkter i kundvagnen genom att loopa igenom arrayen listItems och multiplicera antalet produkter 
i varje rad med priset per produkt. Om kryssrutan för moms är markerad, multipliceras priset med 1,25 för att lägga till moms. 
Totalpriset sparas i variabeln totalPrice. Sedan uppdateras HTML-elementet totalProductPrice för att visa det beräknade totalpriset 
i en sträng med rätt formatering. */
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

/* Lägger till en eventListener på knappen med id #checkoutButton. När knappen klickas på kommer funktionen calculateTotal 
att köras för att beräkna den totala kostnaden för produkterna i kundvagnen och uppdatera visningen på sidan. */
checkoutButton.addEventListener("click", calculateTotal);