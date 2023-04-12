let navLink = document.querySelectorAll(".nav-link")

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove("active-link")
        }
        navLink[i].classList.add("active-link")
    })
}

