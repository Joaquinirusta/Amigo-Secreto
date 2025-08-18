let listaAmigos = [];

// funcionamiento del boton para agregar amigos
function agregarAmigo(){
    let nombreUsuario = document.getElementById(`amigo`).value;
    if (document.getElementById(`amigo`).value == ``){
        alert("Por favor, inserte un nombre.");
    } else{
        listaAmigos.push(nombreUsuario);
        limpiarCaja();
        listaVisual();
    }
}

//funcion para la lista de amigos visual de la web
function listaVisual() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = ``;
   lista.innerHTML = listaAmigos;// modificar, usar bucle for
}

// limpiar el espacio de input
function limpiarCaja(){
    document.querySelector(`#amigo`).value = ``;
}