const searchInput = document.querySelector("[data-search]")
//Pronadi "data-user-cards-container" dio dokumenta na html-u i spremi u "userCardContainer"
const userCardContainer = document.querySelector("[data-user-cards-container")
//Pronadi "data-user-template" dio dokumenta na html-u i spremi u "userCardTemplate"
const userCardTemplate = document.querySelector("[data-user-template]")

let users = []

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = 
            user.name.toLowerCase().includes(value) || 
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })


})

fetch("users.json")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            // Pokupi čisti "data-user-template" div i stavi ga u "card":
            const card = userCardTemplate.content.cloneNode(true).children[0]
            // Pokupi header/body div stavi ga u "header/body"
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            // Popuni "header/body" sa podacima iz baze
            header.textContent = user.name
            body.textContent = user.email
            console.log(card)
            // Upiši "card" u html
            userCardContainer.append(card)
            return { name: user.name, email: user.email, element: card }
        })
    })
