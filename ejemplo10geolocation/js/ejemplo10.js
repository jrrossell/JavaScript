function queHagoSiSaleBien(miPosicion){
    var latitud = miPosicion.coords.latitude;
    var longitud = miPosicion.coords.longitude;
    var pDatos = document.getElementById("datos");
    pDatos.innerText = "Latitud : " + latitud + 
        " Longitud : " + longitud;
    var div = document.getElementById("localizacion");
    var image = new Image();
    image.src = 
    "https://maps.googleapis.com/maps/api/staticmap?center=" 
        + latitud + "," + longitud + "&zoom17&size=300x300";

    div.appendChild(image);
}
function queHagoSiSaleMal(e){
    var pDatos = document.getElementById("datos");
    pDatos.innerText = "A tomar por culo! " + e.message;
}
function andestoy(){
    navigator.geolocation.getCurrentPosition(
        queHagoSiSaleBien,
        queHagoSiSaleMal
    )
}