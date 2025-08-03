let nomes = [];

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function adicionarAmigo() {
  let input = document.querySelector('input');
  let amigos = input.value;

  if (amigos == "") {
    alert('Por favor, adicione um nome válido');
  }else {
    nomes.push(amigos);
  }
  listaAmigos();
  limparCampo();
}

function listaAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    for(let nome of nomes) {
    let li = document.createElement('li');
    li.textContent =  nome;
    ul.appendChild(li);
    }
}

function sortearAmigo() {
    let ul = document.getElementById('resultado');
    ul.innerHTML = '';

    if(nomes.length == 0) {
        alert ('Adicione nomes para sortear');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeAleatorio = nomes[indiceAleatorio];

    let li = document.createElement('li');
    li.textContent = nomeAleatorio;
    ul.appendChild(li);

    document.getElementById('listaAmigos').innerHTML = '';
}

function limparCampo() {
    let input = document.querySelector('input');
    input.value = "";
}