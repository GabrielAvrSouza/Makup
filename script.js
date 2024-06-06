const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara")


function contato(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function sumir(){
    form.style.left = "-1399px"
    mascara.style.visibility = "hidden"
}

function Enviar(){
    form.style.left = "-1399px"
    form.style.visibility = "hidden"
}
 