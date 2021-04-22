//This function renders the google maps API and markers in Our Locations section
function initMap() {
    var options = {
        // Map options
        zoom: 9,
        center: {
            lat: 52.30517312711107,
            lng: 4.675973153140284
        }
    };

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker call-out

    addMarker({
        coords: {
            lat: 52.37643384193294,
            lng: 4.631371396030426
        },
        content: `<div style="text-align: center; font-family: 'Quattrocento', sans-serif; font-weight: 400"><h2>REAL BREAD</br>Haarlem</h2><h4>Grote Houtstraat 163</h4></div>`
    });

    addMarker({
        coords: {
            lat: 52.37369052720405,
            lng: 4.877853119049435
        },
        content: `<div style="text-align: center; font-family: 'Quattrocento', sans-serif; font-weight: 400"><h2>REAL BREAD</br>Amsterdam</h2><h4>Rozengracht 180</h4></div>`
    });

    addMarker({
        coords: {
            lat: 52.075448555229514,
            lng: 4.3166986533105876
        },
        content: `<div style="text-align: center; font-family: 'Quattrocento', sans-serif; font-weight: 400"><h2>REAL BREAD</br>The Hague</h2><h4>Wagenstraat 182</h4></div>`
    });

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });

        }
    }
    //Zooms in a location by clicking location button
    $(".location-button").click(function () {
        map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
        map.setZoom(17);
    });
}




