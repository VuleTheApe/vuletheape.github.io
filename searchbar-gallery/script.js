const searchInput = document.querySelector("[data-search]")
//Pronadi "data-user-cards-container" dio dokumenta na html-u i spremi u "userCardContainer"
const userCardContainer = document.querySelector("[data-user-cards-container]")
//Pronadi "data-user-template" dio dokumenta na html-u i spremi u "userCardTemplate"
const userCardTemplate = document.querySelector("[data-user-template]")

let photos = []

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    photos.forEach(photo => {
        const isVisible = 
            photo.artist.toLowerCase().includes(value)  || 
            photo.title.toLowerCase().includes(value) ||
            photo.type.toLowerCase().includes(value) ||
            photo.description.toLowerCase().includes(value) ||
            photo.price.toLowerCase().includes(value)
        photo.element.classList.toggle("hide", !isVisible)
    })


})

fetch("gallery.json")
    .then(res => res.json())
    .then(data => {
        photos = data.map(photo => {
            // Pokupi čisti "data-user-template" div i stavi ga u "card":
            const card = userCardTemplate.content.cloneNode(true).children[0]

            // Pokupi header/body div stavi ga u "header/body"
            const header = card.querySelector("[data-header]")
            const image = card.querySelector("[data-image]")
            const title = card.querySelector("[data-title]")
            const type = card.querySelector("[data-type")
            const description = card.querySelector("[data-description]")
            const price = card.querySelector("[data-price]")
            

            // Popuni "header/body" sa podacima iz baze
            header.textContent = photo.artist
            image.src = photo.url
            title.textContent = photo.title
            type.textContent = photo.type
            description.textContent = photo.description
            price.textContent = photo.price
            

            // Upiši "card" u html
            userCardContainer.append(card)
            return { artist: photo.artist, title: photo.title, type: photo.type, description: photo.description, price: photo.price, element: card }
        })
    })
