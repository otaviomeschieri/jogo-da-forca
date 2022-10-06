let tela = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";
//let dica = "";

let letras = [];
let erros = 8;
let acertos = 0;

let teclas = document.getElementsByClassName("botao-teclado");

document.getElementById("div-fim-de-jogo").style.display = "none";

function escolherPalavraSecreta(evento) {
    let palavra = evento[Math.floor(Math.random() * evento.length)]
    palavraSecreta = palavra;
    //dica = palavra[1]
    console.log(palavraSecreta);
}

/*function mostraDica() {
    document.getElementById("dica").innerHTML = "dica: " + dica;
}*/


function verificarLetra(key) {
    let estado = false;
    if(!letras.includes(key)) {
        letras.push(key);
        console.log(key);
        console.log(letras);
        return estado;
    }
}

function verificaLetraClicada(letra) {
    if(!letras.includes(letra)) {
        letras.push(letra);
        if(palavraSecreta.includes(letra)) {
            for(let i = 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i);
                    //document.getElementById(letra).style.background = "green";
                    adicionaAcertos();
                    ganharJogo();
                }
            }
        } else {
            adicionarLetraIncorreta();
            //document.getElementById(letra).style.background = "red";
            escreverLetraIncorreta(letra, erros);
            //DesenhaErro();
            perderJogo();
        }
        console.log(letras);
    }
}

function adicionarLetraIncorreta() {
    erros -= 1;
    //console.log(erros);
}

function adicionaAcertos() {
    acertos++;
    //console.log(acertos);
}

function jogoAnimais() {
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta(sorteiaAnimal);
    desenharCanvas();
    desenharLinhas();
    escreverLetraIncorreta();
    //mostraDica();
    //document.getElementById("teclado-virtual").style.display = "flex";

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        verificaLetraClicada(letra);
    }    
}

function jogoComidas() {
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta(sorteiaComida);
    desenharCanvas();
    desenharLinhas();
    escreverLetraIncorreta();
    //mostraDica();
    //document.getElementById("teclado-virtual").style.display = "flex";

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        verificaLetraClicada(letra);
    }    
}

function reiniciar() {
    
    limpaTela();
    document.getElementById("div-fim-de-jogo").style.display = "none";
    limpaTeclas();
    
    iniciaJogo();
    erros = 8;
    acertos = 0;
}

function ganharJogo() {
    if(acertos == palavraSecreta.length) {
        document.getElementById("ganhou").style.display = "flex";
        document.getElementById("perdeu").style.display = "none";
        document.getElementById("div-fim-de-jogo").style.display = "flex";
        letras = [];
    } 
}

function perderJogo() {
    if(erros == 0) {
        document.getElementById("perdeu").style.display = "flex";
        document.getElementById("ganhou").style.display = "none";
        document.getElementById("div-fim-de-jogo").style.display = "flex";
        letras = [];
    } 
}


function clicaLetra(e) {
    let tecla = e;
    console.log(tecla);
    verificaLetraClicada(tecla);
}

function limpaTeclas() {
    document.getElementById("Q").style.background = "white";
    document.getElementById("W").style.background = "white";
    document.getElementById("E").style.background = "white";
    document.getElementById("R").style.background = "white";
    document.getElementById("T").style.background = "white";
    document.getElementById("Y").style.background = "white";
    document.getElementById("U").style.background = "white";
    document.getElementById("I").style.background = "white";
    document.getElementById("O").style.background = "white";
    document.getElementById("P").style.background = "white";
    document.getElementById("A").style.background = "white";
    document.getElementById("S").style.background = "white";
    document.getElementById("D").style.background = "white";
    document.getElementById("F").style.background = "white";
    document.getElementById("G").style.background = "white";
    document.getElementById("H").style.background = "white";
    document.getElementById("J").style.background = "white";
    document.getElementById("K").style.background = "white";
    document.getElementById("L").style.background = "white";
    document.getElementById("Ç").style.background = "white";
    document.getElementById("Z").style.background = "white";
    document.getElementById("X").style.background = "white";
    document.getElementById("C").style.background = "white";
    document.getElementById("V").style.background = "white";
    document.getElementById("B").style.background = "white";
    document.getElementById("N").style.background = "white";
    document.getElementById("M").style.background = "white";
}

function caixaNovaPalavra() {
    document.getElementById("caixa-add-palavra").style.display ="flex";
    document.getElementById("add-palavra-jogo").style.display = "none";
    document.getElementById("nova-palavra").focus();
}

function adicionarNovaPalavra() {
    let novaPalavra = document.getElementById("nova-palavra").value.toUpperCase();
    //let novaDica = document.getElementById("nova-dica").value.toUpperCase();
    palavras.push([novaPalavra,novaDica]);
    document.getElementById("nova-palavra").value = "";
    //document.getElementById("nova-dica").value = "";
    document.getElementById("nova-palavra").focus();
}

/*
let teclado = document.querySelector(".botao-teclado");

teclado.addEventListener("click" , clicaLetra);*/