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

function desenharForca(erros) {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#000000";
    
    // Forca
    if(erros === 7) { 
        tela.moveTo(125,600);
        tela.lineTo(125,250);
        tela.moveTo(270,250);
        tela.lineTo(125,250);
    }
    // Corda
    if(erros === 6) { 
        tela.moveTo(270,250);
        tela.lineTo(270,280);
    }
    // Cabeça
    if(erros === 5) {
        let emoji02 = new Image();
        emoji02.addEventListener('load',() => {
            tela.drawImage(emoji02,231,280,78,74);
        });
        emoji02.src = "./imagens/emoji02.png";
    }
    // Tronco
    if(erros === 4) {
        // let emoji03 = new Image();
        // emoji03.addEventListener('load',() => {
        //     tela.drawImage(emoji03,560,115);
        // },false);
        // emoji03.src = "./imagens/emoji03.png";
        tela.moveTo(270,354);
        tela.lineTo(270,470);
    }
    // Perna esquerda
    if(erros === 3) {
        tela.moveTo(270,470);
        tela.lineTo(220,531);
    }
    // Perna direita
    if(erros === 2) {
        //     tela.clearRect(560,115,690,233);
        //     let emoji05 = new Image();
        //     emoji05.src = "./imagens/emoji05.png";
        //     emoji05.addEventListener('load',() => {
        //         tela.drawImage(emoji05,560,115);
        // })
        tela.moveTo(270,470);
        tela.lineTo(320,531);
    }
    // Braço esquerdo
    if(erros === 1) {
        //     tela.clearRect(560,115,690,233);
        //     let emoji06 = new Image();
        //     emoji06.src = "./imagens/emoji06.png";
        //     emoji06.addEventListener('load',() => {
        //         tela.drawImage(emoji06,560,115);
        // })
        tela.moveTo(270,390);
        tela.lineTo(230,430);
    }
    // Braço direito
    if(erros === 0) {
        //     tela.clearRect(560,115,690,233);
        //     let cabeca = new Image();
        //     cabeca.src = "./imagens/emoji07.png";
        //     cabeca.addEventListener('load',() => {
        //         tela.drawImage(cabeca,560,115);
        // })
        tela.moveTo(270,390);
        tela.lineTo(310,430);
        tela.stroke();
        tela.closePath();
        exibirDerrota();
    }
    tela.stroke();
    tela.closePath();
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
    tela.strokeStyle = 'black';
    tela.textBaseline = "bottom";
    tela.lineCap = "round";
    tela.fillStyle = "#ffff00";
    tela.lineWidth = 5;
    let largura = 800/palavraSecreta.length;
    tela.strokeText(palavraSecreta[index],473 + (largura * index),550);
    tela.fillText(palavraSecreta[index],473 + (largura * index),550);
}

function limpaTela() {
    tela.clearRect(0,0,1300,800)
 }

function escreverLetraIncorreta(letra,erros) {
    tela.font = "bold 40px Source Code Pro";
    tela.lineCap = "round";
    tela.fillStyle = "#ff0000";
    tela.lineWidth = 6;
    tela.fillText(letra,470 + (40 * (10 - erros)),670,40);
    // desenharErros();
    desenharForca(erros);
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
    tela.font = "bold 42px Source Code Pro";;
    tela.lineWidth=6;
    tela.lineCap="round";
    tela.lineJoin="round";
    tela.fillStyle="red";
    tela.fillText("Fim de jogo!",930,320);
    tela.fillText("A palavra era " + palavraSecreta,930,420);
}
// document.getElementById("mostra-palavra-secreta").innerHTML = "A palavra era " + palavraSecreta;

function exibirVitoria() {
    // if(acertos == palavraSecreta.length) {
    //     letras = [];
    //     tela.clearRect(0,0,1300,800);
    
    // }
    tela.fill = "red";
    tela.font = "bold 42px Source Code Pro";
    tela.lineWidth=6;
    tela.lineCap="round";
    tela.lineJoin="round";
    tela.fillStyle="green";
    tela.fillText("Ganhou,",950,320);
    tela.fillText("Parabéns!",930,360);
    
    
    
    
    
    // setTimeout( recarregar , 1000);
}