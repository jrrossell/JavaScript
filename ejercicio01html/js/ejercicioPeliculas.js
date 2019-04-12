var listaPeliculas = new Array();
var codigo = false

function inicializar() {
    //localStorage.removeItem("peliculas")
    console.log(JSON.parse(localStorage.getItem("peliculas")))
    var peliculasEnLocal = JSON.parse(localStorage.getItem("peliculas"))
    if (peliculasEnLocal == null || peliculasEnLocal == false || peliculasEnLocal == 0) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "http://192.168.1.63:8080/peliculas");
        ajax.onreadystatechange = function () {
            if (ajax.status == 200 && ajax.readyState == 4) {
                datos = JSON.parse(ajax.responseText)
                console.log(datos);
                for (let h = 0; h < datos.length; h++) {

                    var trPelicula = '<tr>'
                        + '<td>' + datos[h].codId + '</td>'
                        + '<td>' + datos[h].titulo + '</td>'
                        + '<td>' + datos[h].director + '</td>'
                        + '<td>' + datos[h].genero + '</td>'
                        + '<td>' + datos[h].fecha + '</td>'
                        + '<td>' + datos[h].valoracion + '</td>'
                        + '<td><button onclick="eliminar(' + datos[h].codId + ')">Eliminar</button>'
                        + '<button onclick="editar(' + datos[h].codId + ')">Editar</button></td>'
                        + '</tr>'

                    var tbody = document.getElementById("filaDePeliculas")
                    var tr = document.createElement("tr")
                    tr.id = datos[h].codId
                    tr.innerHTML = trPelicula
                    tbody.appendChild(tr)
                }
                localStorage.setItem("peliculas", JSON.stringify(datos))
            }
        }
        ajax.send();
    } else {


        for (var j = 0; j < peliculasEnLocal.length; j++) {

            var pelicula = peliculasEnLocal[j]

            var trPelicula = '<tr>'
                + '<td>' + pelicula.codId + '</td>'
                + '<td>' + pelicula.titulo + '</td>'
                + '<td>' + pelicula.director + '</td>'
                + '<td>' + pelicula.genero + '</td>'
                + '<td>' + pelicula.fecha + '</td>'
                + '<td>' + pelicula.valoracion + '</td>'
                + '<td><button onclick="eliminar(' + pelicula.codId + ')">Eliminar</button>'
                + '<button onclick="editar(' + pelicula.codId + ')">Editar</button></td>'
                + '</tr>'

            var tbody = document.getElementById("filaDePeliculas")
            var tr = document.createElement("tr")
            tr.id = pelicula.codId
            tr.innerHTML = trPelicula
            tbody.appendChild(tr)
        }
    }
}

function agregar() {
    peli = new Pelicula()
    peli.titulo = document.getElementById("titulo").value
    peli.director = document.getElementById("director").value
    peli.codId = document.getElementById("codId").value
    peli.genero = document.getElementById("genero").value
    peli.fecha = document.getElementById("fecha").value
    peli.valoracion = document.getElementById("valoracion").value

    if (codigo.disabled == true) {
        actualizarPelicula(peli);
        codigo.disabled = false;
    } else {
        this.listaPeliculas.push(peli);
    }

    console.log(this.listaPeliculas)
    localStorage.setItem("peliculas", JSON.stringify(this.listaPeliculas))

    mostrarPeliculas(peli.codId)
    limpiarCampos()
}

function mostrarPeliculas(codId) {
    var lista = JSON.parse(localStorage.getItem("peliculas"))
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        let peliculaActual = lista[i];
        if (peliculaActual.codId == codId) {


            var trPelicula = '<tr>'
                + '<td>' + peliculaActual.codId + '</td>'
                + '<td>' + peliculaActual.titulo + '</td>'
                + '<td>' + peliculaActual.director + '</td>'
                + '<td>' + peliculaActual.genero + '</td>'
                + '<td>' + peliculaActual.fecha + '</td>'
                + '<td>' + peliculaActual.valoracion + '</td>'
                + '<td><button onclick="eliminar(' + peliculaActual.codId + ')">Eliminar</button>'
                + '<button onclick="editar(' + peliculaActual.codId + ')">Editar</button></td>'
                + '</tr>'

            var tbody = document.getElementById("filaDePeliculas")
            var tr = document.createElement("tr")
            tr.id = peliculaActual.codId
            tr.innerHTML = trPelicula
            tbody.appendChild(tr)
        }
    }
}

function eliminar(codId) {
    var lista = JSON.parse(localStorage.getItem("peliculas"))
    for (let i = 0; i < lista.length; i++) {
        let peliculaActual = lista[i];
        if (peliculaActual.codId == codId) {
            lista.splice(i, 1);
            localStorage.setItem("peliculas", JSON.stringify(lista))
            document.getElementById(codId).remove()
        }
    }
}

function limpiarCampos() {
    document.getElementById("titulo").value = ""
    document.getElementById("director").value = ""
    document.getElementById("codId").value = ""
    document.getElementById("genero").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("valoracion").value = ""
}

function editar(codId) {
    console.log(JSON.parse(localStorage.getItem("peliculas")))
    var listaPeliculas = JSON.parse(localStorage.getItem("peliculas"))
    for (let i = 0; i < listaPeliculas.length; i++) {
        let peliculaActual = listaPeliculas[i];
        if (peliculaActual.codId == codId) {
            codigo = document.getElementById("codId");
            codigo.value = peliculaActual.codId
            document.getElementById("titulo").value = peliculaActual.titulo
            document.getElementById("director").value = peliculaActual.director
            document.getElementById("genero").value = peliculaActual.genero
            document.getElementById("fecha").value = peliculaActual.fecha
            document.getElementById("valoracion").value = peliculaActual.valoracion
            codigo.disabled = true;
        }
    }
}

function actualizarPelicula(pelicula) {
    var listaPeliculas = JSON.parse(localStorage.getItem("peliculas"))
    for (let i = 0; i < listaPeliculas.length; i++) {
        let peliculaActual = listaPeliculas[i];
        if (peliculaActual.codId == pelicula.codId) {
            listaPeliculas[i] = pelicula;
            this.listaPeliculas[i] = pelicula
            
        }
    }
}