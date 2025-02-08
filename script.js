
const colores = ["black", "lightblue", "green", "purple", "orange"];
let indice = 0;

function cambiarColor() {
    document.getElementById("textoLinea").style.color = colores[indice];
    indice = (indice + 1) % colores.length; 
}


setInterval(cambiarColor, 500);