function desenharCanvas() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    //Manipulação
    tela.fillRect(0,0,1200,800);
    tela.beginPath();
    tela.moveTo(650,500);
    tela.lineTo(900,500);
    tela.stroke();
    tela.closePath();
}

function desenharLinhas() {
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    let largura = 600/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++) {
        tela.moveTo(500+(largura*i),640);
        tela.lineTo(550+(largura*i),640);
    }

    tela.stroke();
    tela.closePath();
}

function desenharForca() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    tela.beginPath();
    tela.moveTo(720,500);
    tela.lineTo(720,100);
    tela.lineTo(870,100);
    tela.stroke();
    tela.closePath();
}

function desenharCorda() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    tela.beginPath();
    tela.moveTo(870,100);
    tela.lineTo(870,120);
    tela.stroke();
    tela.closePath();
}

function desenharCabeca() {
    let cabeca = new Image();
    cabeca.src = "./imagens/cabeca.png";
    cabeca.addEventListener('load',() => {
        tela.drawImage(cabeca,0,0)
    })
}

function desenharTronco() {
    let tronco = new Image();
    tronco.src = "./imagens/tronco.png";
    tronco.addEventListener('load',() => {
        tela.drawImage(tronco,50,50)
    })
}

function desenharBracoEsquerdo() {
    let bracoEsquerdo = new Image();
    bracoEsquerdo.src = "./imagens/braco-esquerdo.png";
    bracoEsquerdo.addEventListener('load',() => {
        tela.drawImage(bracoEsquerdo,60,60)
    })
}

function desenharBracoDireito() {
    let bracoDireito = new Image();
    bracoDireito.src = "./imagens/braco-direito.png";
    bracoDireito.addEventListener('load',() => {
        tela.drawImage(bracoDireito,80,80)
    })
}

function desenharPernaEsquerda() {
    let pernaEsquerda = new Image();
    pernaEsquerda.src = "./imagens/perna-esquerda.png";
    pernaEsquerda.addEventListener('load',() => {
        tela.drawImage(pernaEsquerda,100,100)
    })
}

function desenharPernaDireita() {
    let pernaDireita = new Image();
    pernaDireita.src = "./imagens/perna-direita.png";
    pernaDireita.addEventListener('load',() => {
        tela.drawImage(pernaDireita,40,40)
    })
}

//Alterar com mensagem de FIM DE JOGO
/*function fimDeJogo() {
        tela.fillStyle = "black";
		tela.beginPath();
		tela.moveTo(50, 50);
		tela.lineTo(50, 400);
		tela.lineTo(400, 400);
		tela.fill();
	}*/

function escreverLetraCorreta(index) {
    tela.font = "bold 52px Inter"
    tela.lineCap = "round";
    tela.fillStyle = "#0A3871";
    tela.lineWidth = 6;
    let largura = 600/palavraSecreta.length;
    tela.fillText(palavraSecreta[index],510 + (largura * index),620);
}

function escreverLetraIncorreta(letra,erros) {
    tela.font = "bold 40px Inter"
    tela.lineCap = "round";
    tela.fillStyle = "#0A3871";
    tela.lineWidth = 6;
    tela.fillText(letra,520 + (40 * (10 - erros)),720,40);
    desenharErros();
}

function desenharErros() {
    if(erros === 7) {
        desenharForca();
    }
    if(erros === 6) {
        desenharCorda();
    }
    if(erros === 5) {
        desenharCabeca();
    }
    if(erros === 4) {
        desenharTronco();
    }
    if(erros === 3) {
        desenharBracoEsquerdo();
    }
    if(erros === 2) {
        desenharBracoDireito();
    }
    if(erros === 1) {
        desenharPernaEsquerda();
    }
    if(erros === 0) {
        desenharPernaDireita();
        //document.getElementById("perdeu").style.display = "flex";
        document.getElementById("mostra-palavra-secreta").innerHTML = "A palavra era " + palavraSecreta;
    }
}