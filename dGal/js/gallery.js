
const searchInput = document.querySelector("[data-search]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const userCardTemplate = document.querySelector("[data-user-template]")

var artistt = "";
var category = "all";
var photos = [];
var value = [];
updateGallery();
filterCategory(category);

searchInput.addEventListener('input', e => {
    var value = e.target.value.toLowerCase();
    artistt = value;

        photos.forEach(photo => {

            if (category != "all"){
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

function filterCategory(value) {
    console.log(artistt);
    if (value.toLowerCase() === "all") {

        if (artistt === "" || artistt === " ") {
            photos.forEach(photo => {
                photo.element.classList.toggle("hide", false);
            })
        }
        else {
            photos.forEach(photo => {
                const isVisible =
                    photo.artist.toLowerCase().includes(artistt)
                photo.element.classList.toggle("hide", !isVisible);
        })
    }
    } else {
        category = value.toLowerCase();
        photos.forEach(photo => {
            const isVisible =
                photo.type.toLowerCase().includes(category) && photo.artist.toLowerCase().includes(artistt);

            photo.element.classList.toggle("hide", !isVisible);
        })
    }

    for(let i=0; i<document.getElementById("item-category").children.length; i++){
        document.getElementById("item-category").children[i].classList.toggle("active-item", false)
    }
    document.getElementById(value).classList.toggle("active-item", true);
}

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
function clearInputs() {
    artistt = "";
    category = "all";
    filterCategory("all");
    document.getElementById("artist").value = "";
    document.getElementById("year-from").value = "";
    document.getElementById("year-to").value = "";
    document.getElementById("price-current-from").value = "";
    document.getElementById("price-current-to").value = "";
    document.getElementById("price-last-from").value = "";
    document.getElementById("price-last-to").value = "";

}
function updateGallery() {
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
}