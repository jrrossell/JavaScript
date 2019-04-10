var i = 1

function agregar() {
    var titulo = document.getElementById("titulo").value
    var director = document.getElementById("director").value
    var cod = document.getElementById("cod").value
    var genero = document.getElementById("genero").value
    var fecha = document.getElementById("fecha").value
    var valoracion = document.getElementById("valoracion").value

    //var tr = '<tr><td>' + cod + '</td><td>' + titulo + '</td><td>' + director + '</td><td>' + genero + '</td><td>' + fecha + '</td><td>' + valoracion + '</td><td><button>Editar</button><button>Eliminar</button></td></tr>'
   
    var tbody = document.getElementById("valor")
    
    var tr = document.createElement("tr")

    var td0 = document.createElement("td")
    td0.id = i
    console.log(td0.id)
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var td5 = document.createElement("td")
    var td6 = document.createElement("td")

    td0.innerHTML = cod
    td1.innerHTML = titulo
    td2.innerHTML = director         
    td3.innerHTML = genero
    td4.innerHTML = fecha
    td5.innerHTML = valoracion
    td6.innerHTML = '<button onclick="eliminar(' + i + ')">Eliminar</button>'

    tr.appendChild(td0)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)

    tbody.appendChild(tr)
    i++
}

function eliminar(row){
    var eliminar = document.getElementById(row).id
    console.log(eliminar)
    document.getElementById("mitable").deleteRow(eliminar);
}