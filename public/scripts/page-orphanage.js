const options ={
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}
//create map
const map = L.map('mapid', options).setView([-8.059471,-34.8840264], 15);
//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);
//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170,2]
})

L
.marker([-8.059471,-34.8840264], { icon })
.addTo(map)

//Image galery
function selectImage(event){
    const button = event.currentTarget
    //remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }
    //seleciona a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualiza o container de imagem
    imageContainer.src= image.src

    //adiciona a classe .active para este botao
    button.classList.add('active')
}


