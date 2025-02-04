// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaracion de variables
let listaAmigos = [];

function cambiarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    if(amigo.trim().length === 0 || /^\s+$/.test(amigo)){
        alert("Por favor inserte un nombre.");
    } else{
        listaAmigos.push(amigo.trim());
    } 
    console.log(listaAmigos);
    document.querySelector('#amigo').value = '';
    actualizaListaAmigos();
    return;
}

function actualizaListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';
    for(let i=0 ; i < listaAmigos.length ; i++){
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}