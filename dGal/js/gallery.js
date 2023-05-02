const searchInput = document.querySelector("[data-search]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const userCardTemplate = document.querySelector("[data-user-template]")

var category = "";
var photos = [];
var value = [];

searchInput.addEventListener('input', e => {
    console.log(category);
    var value = e.target.value.toLowerCase().split(" ");
        photos.forEach(photo => {
            if (category != ""){
                    const isVisible =
                        photo.artist.toLowerCase().includes(value) && photo.type.toLowerCase().includes(category.toLowerCase());
                    photo.element.classList.toggle("hide", !isVisible);
            } else {
                const isVisible =
                            photo.artist.toLowerCase().includes(value);
                        photo.element.classList.toggle("hide", !isVisible);
            }
        }
    )
});

function filterCategory (value) {

    if (value.toLowerCase() === "all") {
        category = "";
        photos.forEach(photo => {
            photo.element.classList.toggle("hide", false);
        })
    } else {
        category = value;
        photos.forEach(photo => {
            const isVisible =
                photo.type.toLowerCase().includes(value.toLowerCase());

            photo.element.classList.toggle("hide", !isVisible);
        })
    }
}

fetch("gallery.json")
    .then(res => res.json())
    .then(data => {
        photos = data.map(photo => {

            const card = userCardTemplate.content.cloneNode(true).children[0]

            const header = card.querySelector("[data-header]")
            const image = card.querySelector("[data-image]")
            const title = card.querySelector("[data-title]")
            const type = card.querySelector("[data-type")
            const description = card.querySelector("[data-description]")
            const price = card.querySelector("[data-price]")

            header.textContent = photo.artist
            image.src = photo.url
            title.textContent = photo.title
            type.textContent = photo.type
            description.textContent = photo.description
            price.textContent = photo.price

            userCardContainer.append(card)
            return { artist: photo.artist, title: photo.title, type: photo.type, description: photo.description, price: photo.price, element: card }
        })
    })

function imagePreview(element) {
        url = element.querySelector("[data-image").src
        document.getElementById("image-preview-box").style.display = "flex";
        document.getElementById("image-preview").src = url;
        document.getElementById("body").style = "overflow: hidden"
}

function closeImagePreview() {
        document.getElementById("image-preview-box").style.display = "none";
        document.getElementById("image-preview").src = "";
        document.getElementById("body").style = "overflow: auto"
}
