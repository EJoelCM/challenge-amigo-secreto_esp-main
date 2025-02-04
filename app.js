// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de variables
let listaAmigos = [];

//Funcion para agregar amigos desde el boton
function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    if(amigo.trim().length === 0 || /^\s+$/.test(amigo)){
        alert("Por favor inserte un nombre.");
    } else{
        listaAmigos.push(amigo.trim());
    } 
    document.querySelector('#amigo').value = '';
    actualizaListaAmigos();
    document.getElementById('amigo').focus();
    return;
}

// Funcion para actualizar la lista de amigos
function actualizaListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';
    for(let i=0 ; i < listaAmigos.length ; i++){
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

// Funcion para sortear el amigo secreto
function sortearAmigo(){
    let amigoSorteado = "";
    indexAmigos = Math.floor(Math.random()*listaAmigos.length);
    if(listaAmigos.length >0){
        amigoSorteado = listaAmigos[indexAmigos];
    } else {alert('Sin amigos en la lista, agrega alguno');}
    document.getElementById('listaAmigos').innerHTML='';
    amigoHTML = document.getElementById('resultado');
    amigoHTML.innerHTML = `El amigo soteado es: ${amigoSorteado}`;
}