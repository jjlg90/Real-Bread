function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: {
            lat: 52.30517312711107,
            lng: 4.675973153140284
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 52.37643384193294,
            lng: 4.631371396030426
        },
        {
            lat: 52.37369052720405,
            lng: 4.877853119049435
        },
        {
            lat: 52.075448555229514,
            lng: 4.3166986533105876
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}