function inicializar() {
    var contenidoDelBody = '<ul id="mascotas">' 
                            + '<li id="perro">Un perro llamado firulais</li>' 
                            + '<li id="gato">Un gato llamado fuskas</li>' 
                            + '<li id="tigre">Un tigre llamado trigger</li>' 
                            '</ul>'

    var body = document.body
    body.innerHTML = contenidoDelBody
}