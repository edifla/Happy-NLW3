//create map
const map = L.map('mapid').setView([-8.059471,-34.8840264], 15);
//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);
//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})
let marker;
//Create and add marker
map.on('click',(event)=>{
    const lat=event.latlng.lat;
    const lng=event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    //Remover icone anterior
    marker && map.removeLayer(marker)

    //ADD icon layer
    marker = L.marker([lat,lng],{icon})
    .addTo(map)
})
//photos upload
function addPhotoField(){
   //pegar o container de fotos #images
   const container =document.querySelector("#images")
   //pegar o container para duplicar .new-upload
   const fieldsContainer = document.querySelectorAll(".new-upload")
   //realizar a duplicação
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1 ].cloneNode(true)
   //Verifica se o anterior esta vazio antes de gerar outro
   const input = newFieldContainer.children[0]
   if(input.value == ""){
        return
   }

   //limpa o campo antes de adicionar
   newFieldContainer.children[0].value =""
   //adicionar o clone ao container de imagem
   container.appendChild(newFieldContainer)

}
function deleteField(){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
         span.parentNode.children[0].value =""
         return
    }
    //Deletar
    span.parentNode.remove()
}   
//Seleciona o sim ou não
function select(event){
    //Pegar o botao clicado retira a classe .active dos botoes
    document.querySelectorAll(".button-select button")
    .forEach(function(button){
        button.classList.remove('active')
    })
    //coloca a classe .active no botao selecionado
    const button = event.currentTarget
    button.classList.add('active')
    //atualiza o input hidden com o valor selecionado
    const input =document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}