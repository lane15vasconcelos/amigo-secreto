let nomes = [];

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function adicionarAmigo() {
  let input = document.querySelector('input');
  let amigos = input.value;

  if (amigos == "") {
    exibirTexto('h2', 'Adicione um nome válido');
  }else {
    nomes.push(amigos);
  }
  
  console.log(nomes);
  limparCampo();
}


function limparCampo() {
    input = document.querySelector('input');
    input.value = " ";
}