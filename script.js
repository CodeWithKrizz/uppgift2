
// JS-kod att utgå från i denna inlämningsuppgift
const listItems = [
    {
        "name": "Leica II",
        "id": "leica",
        "description": "The Leica II is a vintage 35mm rangefinder camera that was produced by Leica from 1932 to 1948. It features interchangeable lenses, a rangefinder focusing system, and a built-in viewfinder. Known for its superior optics, craftsmanship, and historical significance, the Leica II is highly collectible and can be quite expensive.",
        "price": 27499,
        "unit": "$"
    },
    {
        "name": "Pronto",
        "id": "pronto",
        "description": "The Pronto is a vintage point-and-shoot camera made by VEB Pentacon in the 1960s and 1970s. It features a fixed 45mm lens with f/2.8 aperture, a built-in selenium meter, and uses 35mm film. While it lacks advanced features, the Pronto can produce decent images and is popular among vintage camera enthusiasts.",
        "price": 99,
        "unit": "$"
    },
    {
        "name": "Reflekta II",
        "id": "reflekta",
        "description": "The Reflekta II is a vintage folding camera made by Wirgin in the 1950s. It uses 120 roll film, has a fixed 105mm lens with f/4.5 aperture and a 1/200th shutter speed. The camera also has a built-in extinction meter for exposure settings.",
        "price": 2499,
        "unit": "$"
    },
    {
        "name": "Nikon D7500",
        "id": "nikon",
        "description": "The Nikon D7500 is a powerful DSLR camera designed for enthusiasts and professionals alike. It features a 20.9 megapixel sensor, 51-point autofocus system, and ISO range of 100-51,200. The camera can shoot at up to 8 frames per second and records 4K UHD video at 30 frames per second. It also has built-in Wi-Fi and Bluetooth connectivity, making it easy to transfer photos and videos to your mobile device or computer.",
        "price": 1099,
        "unit": "$"
    },
    {
        "name": "Fujifilm X-10",
        "id": "fujifilm",
        "description": "The Fujifilm X-10 is a high-quality compact camera with a 12 megapixel sensor, fast Fujinon lens with 4x optical zoom, and intuitive manual controls. It also features OIS, Full HD video recording, and high-speed continuous shooting.",
        "price": 449,
        "unit": "$"
    },
    {
        "name": "Canon",
        "id": "canon",
        "description": "The Canon 40mm lens is a compact and lightweight prime lens that is designed for Canon EF and EF-S mount cameras. It uses Canon's STM autofocus system, has a minimum focusing distance of just 0.3 meters, and a seven-blade circular aperture.",
        "price": 249,
        "unit": "$"
    }
];

// let shoppingList = {};

// function initShoppingList() {
//     for (let listItem of listItems) {
//         console.log(listItem);
//         shoppingList[listItem.name] = 0;
//     }
// }

window.onload = function() {    
    // funktioner anropas här
    initShoppingList();
}
// Slut på JS-koden att utgå från.


// FUCK sån där konstig loop som bara är förvirrande -_- <-----------------------!
// Fråga till gruppen: Ska vi göra vår egen istället? Man måste väl inte ta deras kod eller?

// Normal for-loop
let shoppingList = {};
let cardTitle = document.querySelectorAll(".card-title");
let cardDescription = document.querySelectorAll(".card-description")

function initShoppingList() {
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i])
        shoppingList[shoppingList.name] = 0;
        
        cardTitle[i].innerHTML = listItems[i].name + `<span class="price-span">${listItems[i].unit}${listItems[i].price}</span>` // Remember to remove the span elements from the html because I added them here instead.
        cardDescription[i].innerHTML = listItems[i].description
        
        console.log(cardTitle[i])
    }
}


// for (let i = 0; i < cardTitle.length; i++) {
//     cardTitle[i].innerHTML = 
// }






























// Detta skapar en variabel med alla navigations länkar och loopar igenom dem. För varje klick på en länk, så ska en funktion kallas på som utför koden: att loopa igenom alla element och ta bort klassnamnet .active-link för varje gång en navlänk klickas på och sen ska samma klass läggas till på just den länken som det klickades på. På så sätt ser vi till så att bara ett element kan ha klassen .active-link åt gången. // Jessica
let navLink = document.querySelectorAll(".nav-link")

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove("active-link")
        }
        navLink[i].classList.add("active-link")
    })
}

