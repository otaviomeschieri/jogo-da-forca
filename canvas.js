function desenharCanvas() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#000000";
    
    //Base da forca
    tela.beginPath();
    tela.moveTo(100,600);
    tela.lineTo(380,600);
    tela.stroke();
    tela.closePath();
}

function desenharLinhas(index,letra,erros) {
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#000000";
    
    let largura = 800/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++) {
        tela.moveTo(450+(largura*i),550);
        tela.lineTo(500+(largura*i),550);
    }
    escreverLetraCorreta(index);
    escreverLetraIncorreta(letra,erros);
    
    tela.stroke();
    tela.closePath();
}

function desenharErros(erros) {
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
        desenharPernaEsquerda();
    }
    if(erros === 2) {
        desenharPernaDireita();
    }
    if(erros === 1) {
        desenharBracoEsquerdo();
    }
    if(erros === 0) {
        desenharBracoDireito();
    }
}

function desenharForca() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#000000";
    
    tela.beginPath();
    tela.moveTo(125,600);
    tela.lineTo(125,250);
    tela.moveTo(270,250);
    tela.lineTo(125,250);
    
    tela.stroke();
    tela.closePath();
}

function desenharCorda() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#000000";
    
    tela.beginPath();
    tela.moveTo(270,250);
    tela.lineTo(270,280);
    
    tela.stroke();
    tela.closePath();
}

function desenharCabeca() {
    let emoji02 = new Image();
    emoji02.addEventListener('load',() => {
        tela.drawImage(emoji02,232,280,75,72);
    });
    emoji02.src = "./imagens/emoji02.png";
    
    tela.stroke();
    tela.closePath();
}

function desenharTronco() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#332020";
    
    tela.beginPath();
    tela.moveTo(270,355);
    tela.lineTo(270,470);
    
    tela.stroke();
    tela.closePath();
}

function desenharPernaEsquerda() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#332020";
    
    tela.beginPath();
    tela.moveTo(270,470);
    tela.lineTo(220,531);
    
    tela.stroke();
    tela.closePath();
}

function desenharPernaDireita() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#332020";
    
    tela.beginPath();
    tela.moveTo(270,470);
    tela.lineTo(320,531);
    
    tela.stroke();
    tela.closePath();
}

function desenharBracoEsquerdo() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#332020";
    
    tela.beginPath();
    tela.moveTo(270,390);
    tela.lineTo(230,430);
    
    tela.stroke();
    tela.closePath();
}

function desenharBracoDireito() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#332020";
    
    tela.beginPath();
    tela.moveTo(270,390);
    tela.lineTo(310,430);
    tela.stroke();
    tela.closePath();
    exibirDerrota();
}

function nomeDaCategoria(index) {
    tela.font = "bold 64px Source Code Pro";
    tela.lineCap = "round";
    tela.fillStyle = "#000000";
    tela.lineWidth = 6;
    tela.textAlign = "center";
    
    let categoria = index;
    
    if(categoria < 5) {
        tela.fillText("Categoria: " + categorias[index],650,120);
    } else {
        tela.fillText(categorias[index],650,120);
    }
    // tela.fillText(categorias[index],200,120);
}

function escreverLetraCorreta(index) {
    tela.font = "bold 52px Source Code Pro";
    tela.strokeStyle = "#000000";
    tela.textBaseline = "bottom";
    tela.lineCap = "round";
    tela.fillStyle = "#ffff00";
    tela.lineWidth = 5;
    let largura = 800/palavraSecreta.length;
    tela.strokeText(palavraSecreta[index],473 + (largura * index),550);
    tela.fillText(palavraSecreta[index],473 + (largura * index),550);
}

// function limpaTela() {
//     tela.clearRect(0,0,1300,800)
//  }

function escreverLetraIncorreta(letra,erros) {
    tela.font = "bold 40px Source Code Pro";
    tela.lineCap = "round";
    tela.fillStyle = "#ff0000";
    tela.lineWidth = 6;
    tela.fillText(letra,470 + (40 * (10 - erros)),680,40);
    // desenharErros();
    desenharErros(erros);
}

// function desenharErros() {
//     if(erros === 6) {
//         desenharForca();
//     }
//     if(erros === 5) {
//         desenharCabeca();
//     }
//     if(erros === 4) {
//         desenharTronco();
//     }
//     if(erros === 3) {
//         desenharBracoEsquerdo();
//     }
//     if(erros === 2) {
//         desenharBracoDireito();
//     }
//     if(erros === 1) {
//         desenharPernaEsquerda();
//     }
//     if(erros === 0) {
//         desenharPernaDireita();
//         //document.getElementById("perdeu").style.display = "flex";
//         document.getElementById("mostra-palavra-secreta").innerHTML = "A palavra era " + palavraSecreta;
//     }
// }

function exibirDerrota() {
    tela.font = "bold 60px Source Code Pro";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#FF00D4";
    tela.fillText("Fim de jogo!",830,270);
    tela.fillText("A palavra era " + palavraSecreta,830,370);
}

// document.getElementById("mostra-palavra-secreta").innerHTML = "A palavra era " + palavraSecreta;

function exibirVitoria() {
    // if(acertos == palavraSecreta.length) {
    //     letras = [];
    //     tela.clearRect(0,0,1300,800);
    
    // }
    // tela.fill = "red";
    tela.font = "bold 60px Source Code Pro";
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#FF6200";
    tela.fillText("Parabéns,",830,270);
    tela.fillText("você ganhou!",830,370);
    
    
    
    
    
    // setTimeout( recarregar , 1000);
}