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
  console.log(nomes);
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

function limparCampo() {
    input = document.querySelector('input');
    input.value = " ";
}