var i = 1

function inicializar() {
    if (localStorage.getItem("id") <= 1) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "data.json");
        ajax.onreadystatechange = function () {
            if (ajax.status == 200 && ajax.readyState == 4) {
                datos = JSON.parse(ajax.responseText)
                console.log(datos);

                var titulo = datos[0].titulo
                var director = datos[0].director
                var cod = datos[0].cod
                var genero = datos[0].genero
                var fecha = datos[0].fecha
                var valoracion = datos[0].valoracion

                localStorage.setItem("titulo" + i, titulo)
                localStorage.setItem("director" + i, director)
                localStorage.setItem("cod" + i, cod)
                localStorage.setItem("genero" + i, genero)
                localStorage.setItem("fecha" + i, fecha)
                localStorage.setItem("valoracion" + i, valoracion)

                var trPelicula = '<tr>'
                    + '<td>' + cod + '</td>'
                    + '<td>' + titulo + '</td>'
                    + '<td>' + director + '</td>'
                    + '<td>' + genero + '</td>'
                    + '<td>' + fecha + '</td>'
                    + '<td>' + valoracion + '</td>'
                    + '<td><button onclick="eliminar(' + i + ')">Eliminar</button>'
                    + '<button onclick="editar(' + i + ')">Editar</button></td>'
                    + '</tr>'

                var tbody = document.getElementById("filaDePeliculas")
                var tr = document.createElement("tr")
                tr.id = i
                tr.innerHTML = trPelicula
                tbody.appendChild(tr)

                localStorage.setItem("id", i)
                i++
            }
        }
        ajax.send();
    } else {
        for (var j = 1; j <= localStorage.getItem("id"); j++) {

            var titulo = localStorage.getItem("titulo" + j)
            var director = localStorage.getItem("director" + j)
            var cod = localStorage.getItem("cod" + j)
            var genero = localStorage.getItem("genero" + j)
            var fecha = localStorage.getItem("fecha" + j)
            var valoracion = localStorage.getItem("valoracion" + j)

            var trPelicula = '<tr>'
                + '<td>' + cod + '</td>'
                + '<td>' + titulo + '</td>'
                + '<td>' + director + '</td>'
                + '<td>' + genero + '</td>'
                + '<td>' + fecha + '</td>'
                + '<td>' + valoracion + '</td>'
                + '<td><button onclick="eliminar(' + j + ')">Eliminar</button>'
                + '<button onclick="editar(' + j + ')">Editar</button></td>'
                + '</tr>'

            var tbody = document.getElementById("filaDePeliculas")
            var tr = document.createElement("tr")
            tr.id = j
            tr.innerHTML = trPelicula
            tbody.appendChild(tr)
        }
        i = j
    }
}

function agregar() {
    var titulo = document.getElementById("titulo").value
    var director = document.getElementById("director").value
    var cod = document.getElementById("cod").value
    var genero = document.getElementById("genero").value
    var fecha = document.getElementById("fecha").value
    var valoracion = document.getElementById("valoracion").value

    localStorage.setItem("titulo" + i, titulo)
    localStorage.setItem("director" + i, director)
    localStorage.setItem("cod" + i, cod)
    localStorage.setItem("genero" + i, genero)
    localStorage.setItem("fecha" + i, fecha)
    localStorage.setItem("valoracion" + i, valoracion)

    var trPelicula = '<tr>'
        + '<td>' + cod + '</td>'
        + '<td>' + titulo + '</td>'
        + '<td>' + director + '</td>'
        + '<td>' + genero + '</td>'
        + '<td>' + fecha + '</td>'
        + '<td>' + valoracion + '</td>'
        + '<td><button onclick="eliminar(' + i + ')">Eliminar</button>'
        + '<button onclick="editar(' + i + ')">Editar</button></td>'
        + '</tr>'

    var tbody = document.getElementById("filaDePeliculas")
    var tr = document.createElement("tr")
    tr.id = i
    tr.innerHTML = trPelicula
    tbody.appendChild(tr)

    localStorage.setItem("id", i)
    i++
    limpiarCampos()
}

function eliminar(j) {
    document.getElementById(j).remove()
    localStorage.removeItem(j)
}

function limpiarCampos() {
    document.getElementById("titulo").value = ""
    document.getElementById("director").value = ""
    document.getElementById("cod").value = ""
    document.getElementById("genero").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("valoracion").value = ""
}

function editar(i) {
    document.getElementById("titulo").value = localStorage.getItem("titulo" + i)
    document.getElementById("director").value = localStorage.getItem("director" + i)
    document.getElementById("cod").value = localStorage.getItem("cod" + i)
    document.getElementById("genero").value = localStorage.getItem("genero" + i)
    document.getElementById("fecha").value = localStorage.getItem("fecha" + i)
    document.getElementById("valoracion").value = localStorage.getItem("valoracion" + i)

    document.getElementById(i).remove()

}

function vaciarTabla() {
    localStorage.removeItem("id")
    location.reload()
}