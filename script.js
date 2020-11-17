mapboxgl.accessToken = 'pk.eyJ1IjoiZ3V2YW5jaC1nYXJyeXlldiIsImEiOiJja2htanE4bzQwOTh4MndxeGs4MnJ2d3A4In0.LGKj_hzmmb_SfSXXf8lk_A';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setUpMap([position.coords.longitude, position.coords.latitude]);
}


function errorLocation() {
    setUpMap([-2.24, 53.48]);
}

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

