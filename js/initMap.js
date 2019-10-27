function initMap() {

    var coordX = 59.939450;
    var coordY = 30.329500;
    var markerWidth = 80;
    var markerHeight = 140;
    var zoomScale = 16.0;
    var markerX = 59.938770;
    var markerY = 30.323180;


    var coordinates = {lat: coordX, lng: coordY};
    var coordinatesMarker = {lat: markerX, lng: markerY};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: zoomScale, center: coordinates, disableDefaultUI: true});


    new google.maps.Marker({
        position: coordinatesMarker,
        map: map,
        icon: {
            url: '../img/icon/pin.svg',
            scaledSize: new google.maps.Size(markerWidth, markerHeight),
        }
    });


}