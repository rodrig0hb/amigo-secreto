
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    let nomeFormatado = nomeAmigo.value.capitalize();
    if (nomeAmigo.value.trim() !== "" && !listaAmigos.innerHTML.includes(`<li>${nomeFormatado}</li>`)) {
        amigos.push(nomeFormatado);
        listaAmigos.innerHTML += `<li>${nomeFormatado}</li>`;
    } else { 
        alert("Nome inválido ou já existente!");
    }
    nomeAmigo.value = "";
}

function sortear () {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if(i === amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[0] + '<br/>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] +'<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}