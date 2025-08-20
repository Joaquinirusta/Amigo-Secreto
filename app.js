let amigosElegidos = [];

// funcionamiento del boton para agregar amigos
function agregarAmigo(){
    let nombreUsuario = document.getElementById(`amigo`).value;
    if (document.getElementById(`amigo`).value == ``){
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
        console.log(amigosElegidos);
}

// limpiar el espacio de input
function limpiarCaja(){
    document.querySelector(`#amigo`).value = ``;
}