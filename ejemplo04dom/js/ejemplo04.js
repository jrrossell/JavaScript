function inicializar() {
    var elemH1 = document.createElement('h1')
    var textH1 = document.createTextNode("Un titulo")
    elemH1.appendChild(textH1)
    var body = document.body
    body.appendChild(elemH1)
}