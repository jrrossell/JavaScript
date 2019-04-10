function inicializar() {
    var lista = document.getElementById("lista")
    var listItem2 = document.createElement("li")
    var textListItem2 = document.createTextNode(2)
    listItem2.appendChild(textListItem2)
    lista.insertBefore(listItem2, lista.children[1])
    var listItem4 = document.createElement("li")
    var textListItem4 = document.createTextNode(4)
    listItem4.appendChild(textListItem4)
    lista.replaceChild(listItem4, lista.children[3])
}