//create map
const map = L.map('mapid').setView([-8.059471,-34.8840264], 15);
//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);
//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170,2]
})


function addMarker({id,name,lat,lng}){
    // create popup overlay
            const popup = L.popup({
                closeButton:false,
                className: 'map-popup',
                minWidth:240,
                minHeight:240
            }).setContent(`${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`)

    //Create and add mark
            L
            .marker([lat,lng], { icon })
            .addTo(map)
            .bindPopup(popup)

}
const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(orfa =>{
    const orphanage = {
        id: orfa.dataset.id,
        name:orfa.dataset.name,
        lat:orfa.dataset.lat,
        lng:orfa.dataset.lng
    }
    addMarker(orphanage)
})

