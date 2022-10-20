//Seletores
let btnNovoJogo = document.getElementById("btn-novo-jogo");
let btnTelaInicial = document.getElementById("btn-tela-inicial");
let tela = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";
let letras = [];
let palavraCorreta = "";
let erros = 8;
let letrasIncorretas = [];
let numeroDeErros = 8;
let letraEscolhida = [];

document.getElementById("adicionar-palavra").style.display = "none";
document.getElementById("btn-novo-jogo").style.display = "none";

document.getElementById("forca").style.display = "none";

// Captura o id "btn-salvar", salva a palavra adicionada
document.getElementById("btn-salvar").onclick = () => {
  salvarPalavra();
}

// Atualiza a tela quando o usuário clica em "Novo Jogo"
btnNovoJogo.addEventListener("click", function () {
  location.reload();
});

// Atualiza a tela quando o usuário clica em "Tela Inicial"
btnTelaInicial.addEventListener("click", function () {
  location.reload();
});

//Faz o sorteio da palavra
function escolherPalavraSecreta(evento) {
  let palavra = evento[Math.floor(Math.random() * evento.length)]
  palavraSecreta = palavra;
  return palavra;
}

// Verifica qual foi a letra clicada
function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key);
    return false;
    
  }
  else {
    letras.push(key);
    return true;
  }
}

function letraClicada(letra) {
  document.getElementById(letra).style.transitionDuration = "0.5s";
  document.getElementById(letra).style.color = "white";
  document.getElementById(letra).style.background = "gray";
  if(palavraSecreta.includes(letra)) {
    adicionarLetraCorreta(palavraSecreta.indexOf(letra))
    for(let i = 0; i < palavraSecreta.length; i++) {
      if(palavraSecreta[i] === letra) {
        escreverLetraCorreta(i);
        verificarVencedor(letra);
      }
    }
  } else {
    desenharErros(erros);
    verificarFimDeJogo(letra);
  }
}

function adicionarLetraCorreta(i) {
  palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1;
  }
}

function verificarFimDeJogo(letra) {
  //Checa se a letra já foi incluída no array de letras certas ou erradas
  if(letraEscolhida.length < palavraSecreta.length) { 
    //Incluindo as letras já digitadas no array
    letrasIncorretas.push(letra);
    if(letraEscolhida.length < palavraSecreta.length) {
      adicionarLetraIncorreta(letra);
      escreverLetraIncorreta(letra,erros);
      letras = [];
    }
  }
} 

//Verifica se o usuário ganhou
function verificarVencedor(letra) {
  letraEscolhida.push(letra.toUpperCase());
  if (letraEscolhida.length == palavraSecreta.length) {
    exibirVitoria();
    letras = [];
  }
}

// Impede que teclas como shift e outras sejam escritas
function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

// Faz com que os botões da tela inicial desapareçam e mostra a tela de adicionar palavra
function mostrarTelaAdicionarPalavras() {
  // Muda a cor do background
  document.getElementsByTagName("body")[0].style.background = "#fcd0a1";
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(90deg,#fcd0a1 0%, #b95f89 80%)";
  document.getElementsByTagName("body")[0].style.background = "-webkit-linear-gradient(90deg,#fcd0a1 0%, #b95f89 80%)";
  document.getElementsByTagName("body")[0].style.background = "-moz-linear-gradient(90deg,#fcd0a1 0%, #b95f89 80%)";
  
  document.getElementById("forca").style.display = "block";
  document.getElementById("div-titulo").style.display = "none";
  document.getElementById("div-desaparece").style.display = "none";
  document.getElementById("adicionar-palavra").style.display = "block";
  
  document.getElementById("input-nova-palavra").focus();
}

// Salva a palavra que o usuário escreveu
function salvarPalavra() {
  
  //Captura o que foi digitado
  let novaPalavra = document.getElementById("input-nova-palavra").value;
  
  // Inclui a palavra digitada no array de palavras a serem sorteadas
  if(novaPalavra !== ""){
    sorteiaTodas.push(novaPalavra.toUpperCase());
    alert("A palavra digitada foi salva");
    
    // Faz a tela de adicionar palavra desaparecer
    document.getElementById("adicionar-palavra").style.display = "none";
    iniciarJogo(sorteiaTodas,5)
  }
  else{
    alert("Nenhuma palavra foi digitada");
  }
}

//Inicia o jogo
function iniciarJogo(sorteia,index) {
  // Muda a cor do background
  document.getElementsByTagName("body")[0].style.background = "#7fd1b9";
  document.getElementsByTagName("body")[0].style.background = "linear-gradient(90deg,#7fd1b9 0%, #8ddcb6 80%)";
  document.getElementsByTagName("body")[0].style.background = "-webkit-linear-gradient(90deg,#7fd1b9 0%, #8ddcb6 80%)";
  document.getElementsByTagName("body")[0].style.background = "-moz-linear-gradient(90deg,#7fd1b9 0%, #8ddcb6 80%)";
  
  // Faz com que os botões da tela home desapareçam
  document.getElementById("div-titulo").style.display = "none";
  document.getElementById("div-desaparece").style.display = "none";

  document.getElementById("forca").style.display = "block";
  
  //Chama a função que desenha o canva
  desenharCanvas();
  
  //Chama a função que sorteia a palavra 
  escolherPalavraSecreta(sorteia);
  
  //Chama a funão que desenha as linhas
  desenharLinhas();
  
  // Escreve o nome da categoria
  nomeDaCategoria(index);
  
  // Mostra o telado de acordo com o tamanho da tela
  mostrarTeclado();
  
  // Faz com que os botões de "Novo Jogo" e "Sair" apareceçam
  document.getElementById("btn-novo-jogo").style.display = "block";
  
  // Captura a letra digitada
  document.onkeydown = (e) => {
    // Coloca a letra digitada em maiúscula
    let letra = e.key.toUpperCase();
    
    verificarLetraClicada(letra)
    
    //Verifica se o usuário não perdeu
    if (letrasIncorretas.length <= numeroDeErros) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        letraClicada(letra);
      }
    }
  }
}

let teclas = document.getElementsByClassName("keys");

function clicaLetra(e) {
  document.getElementById(e).onclick = () => {
    letraClicada(tecla);
  }
  
  let tecla = e
  letraClicada(tecla);
  
}

let teclado = document.querySelector(".botao-teclado");

teclado.addEventListener("click" , clicaLetra);