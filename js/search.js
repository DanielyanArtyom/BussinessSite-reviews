// Form selects
const selectedAll = document.querySelectorAll(".selected");
selectedAll.forEach(selected => {
    const optionsContainer = selected.previousElementSibling

    const optionsList = optionsContainer.querySelectorAll('.option')

    selected.addEventListener('click', () => {
        if (optionsContainer.classList.contains('active')) {
            optionsContainer.classList.remove('active')
        } else {
            let currentActive = document.querySelector('.options-container.active')
            if (currentActive) {
                currentActive.classList.remove('active')
            }
            optionsContainer.classList.add('active');
        }
    })

    optionsList.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active')
        })
    })
})

// MAP

let pos = [
    {
        location: { lat: -25.463882, lng: 120.047922 },
        image: "../img/map/automative.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },
    {
        location: { lat: -25.463882, lng: 128.047922 },
        image: "../img/map/bar.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },
    {
        location: { lat: -20.463882, lng: 110.047922 },
        image: "../img/map/beauty.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },
    {
        location: { lat: -28.463882, lng: 120.047922 },
        image: "../img/map/food.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },
    {
        location: { lat: -30.463882, lng: 120.047922 },
        image: "../img/map/hotel.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },
    {
        location: { lat: -19.463882, lng: 120.047922 },
        image: "../img/map/shop.svg",
        popupContent:
            `<div id="content" class="contentmap" onclick={redirecter()}>
            <div class="markerTitle">LOREM IPSUM</div>
            <div class="ods">
                <img class="markerImg" src="../img/ENTERTAINMENT.jpg"/>
               <p class="markerText">$90 for two people </p>
               <p class="markerPhone"> 1888-9000</p>
            </div>
            </div>`,
    },

];

let markers = [];

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: -25.363882, lng: 131.044922 },
    });

    for (let i = 0; i < pos.length; i++) {
        let locationInfowindow = new google.maps.InfoWindow({
            content: pos[i].popupContent,
        });

        let marker = new google.maps.Marker({
            position: pos[i].location,
            icon: pos[i].image,
            map: map,
            infowindow: locationInfowindow
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function () {
            hideAllInfoWindows(map);
            this.infowindow.open(map, this);
        });
    }
    // Redirtc on click map marker or left content
}

function hideAllInfoWindows(map) {
    markers.forEach(function (marker) {
        marker.infowindow.close(map, marker);
    });
}

// Redirtc on click map marker or left content

const redirecter = () => {
    window.location = 'searchResult.html'
}

$('.elements__block').each(function (index, el) {
    $(this).click(function () {
        window.location = 'searchResult.html'
    })
})
