/*This script renders the google maps API in Our Locations section*/

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        //initial focused area
        zoom: 9,
        center: {
            lat: 52.30517312711107,
            lng: 4.675973153140284
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{

        //location A
        coords: {
            lat: 52.37643384193294,
            lng: 4.631371396030426
        },
        info: "Haarlem - Grote Houtstraat 163"
    },
    {
        //Location B
        coords: {
            lat: 52.37369052720405,
            lng: 4.877853119049435
        },
        info: "Amsterdam - Rozengracht 180"
    },
    {
        //Location C
        coords: {
            lat: 52.075448555229514,
            lng: 4.3166986533105876
        },
        info: `<h2>The Hague - Wagenstraat 182</h2>`
    }
    ];

    var infoWindow = new google.maps.InfoWindow({
        content: location.info,
    });

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location.coords,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });

}
