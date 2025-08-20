let amigosElegidos = [];

// funcionamiento del boton para agregar amigos
function agregarAmigo(){
    let nombreUsuario = document.getElementById(`amigo`).value;
    if (nombreUsuario == ``){
        alert("Por favor, inserte un nombre.");
    } else if(amigosElegidos.includes(nombreUsuario)){
        alert("El nombre ingresado ya esta en el sorteo");
        limpiarCaja();
    } else{
        amigosElegidos.push(nombreUsuario);
        limpiarCaja();
        listaVisual();
    }
}

//funcion para la lista de amigos visual de la web
function listaVisual() {
   let lista = document.getElementById("listaAmigos");
   let nombre = "";
    for (let i = 0; i < amigosElegidos.length; i++) {
        nombre += `<li>${amigosElegidos[i]}</li>`;
    }
        lista.innerHTML = nombre;
}

//funcion del boton para realizar el sorteo
function sortearAmigo() {
    let nombreElegido = '';
    let resultado = document.getElementById("resultado");
    if (amigosElegidos.length <= 1) {
        alert("Debe ingresar al menos 2 nombres para realizar el sorteo");
    } else {
        let num = Math.floor(Math.random()*amigosElegidos.length);
        nombreElegido = amigosElegidos[num];
        resultado = document.getElementById("resultado");
        resultado.innerHTML = `Su amigo secreto es: ${nombreElegido}`;
       
        }
} 
     
      // limpiar el espacio de input
function limpiarCaja(){
    document.querySelector(`#amigo`).value = ``;
}