function desenharCanvas() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#0A3871";

    //Manipulação
    tela.beginPath();
    tela.moveTo(400,450);
    tela.lineTo(750,450);
    tela.stroke();
    tela.closePath();
}

function desenharLinhas(index,letra,erros) {
    tela.lineWidth = 6;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.fillStyle = "#F3F5FC";
    tela.strokeStyle = "#0A3871";

    let largura = 800/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++) {
        tela.moveTo(250+(largura*i),540);
        tela.lineTo(300+(largura*i),540);
    }
    escreverLetraCorreta(index);
    escreverLetraIncorreta(letra,erros);

    tela.stroke();
    tela.closePath();
}

// function desenharForca() {
//     tela.lineWidth = 8;
//     tela.lineCap = "round";
//     tela.lineJoin = "round";
//     tela.fillStyle = "#F3F5FC";
//     tela.strokeStyle = "#0A3871";

//     tela.beginPath();
//     tela.moveTo(470,500);
//     tela.lineTo(470,100);
//     tela.lineTo(620,100);
//     tela.lineTo(620,130);
//     tela.stroke();
//     tela.closePath();
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function desenharForca(erros) {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#0A3871";

    // Forca-lateral
    if(erros === 8) { 
        tela.moveTo(470,500);
        tela.lineTo(470,100);
    }
    // Forca-teto
    if(erros === 7) { 
        tela.moveTo(620,100);
        tela.lineTo(470,100);
    }
    // Forca-corda
    if(erros === 6) { 
        tela.moveTo(620,100);
        tela.lineTo(620,130);
    }
    // Cabeça
    if(erros === 5) {
        let emoji02 = new Image();
        emoji02.addEventListener('load',() => {
            tela.drawImage(emoji02,560,130,78,74);
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
        tela.moveTo(620,222);
        tela.lineTo(620,320);
    }
    // Perna esquerda
    if(erros === 3) {
    //     tela.clearRect(560,115,690,233);
    //     let emoji04 = new Image();
    //     emoji04.src = "./imagens/emoji04.png";
    //     emoji04.addEventListener('load',() => {
    //         tela.drawImage(emoji04,560,115);
    // })
        tela.moveTo(620,322);
        tela.lineTo(570,383);
    }
    // Perna direita
    if(erros === 2) {
    //     tela.clearRect(560,115,690,233);
    //     let emoji05 = new Image();
    //     emoji05.src = "./imagens/emoji05.png";
    //     emoji05.addEventListener('load',() => {
    //         tela.drawImage(emoji05,560,115);
    // })
        tela.moveTo(620,322);
        tela.lineTo(660,383);
    }
    // Braço esquerdo
    if(erros === 1) {
    //     tela.clearRect(560,115,690,233);
    //     let emoji06 = new Image();
    //     emoji06.src = "./imagens/emoji06.png";
    //     emoji06.addEventListener('load',() => {
    //         tela.drawImage(emoji06,560,115);
    // })
        tela.moveTo(620,263);
        tela.lineTo(570,322);
    }
    // Braço direito
    if(erros === 0) {
    //     tela.clearRect(560,115,690,233);
    //     let cabeca = new Image();
    //     cabeca.src = "./imagens/emoji07.png";
    //     cabeca.addEventListener('load',() => {
    //         tela.drawImage(cabeca,560,115);
    // })
        tela.moveTo(620,263);
        tela.lineTo(660,322);
        // document.getElementById("perdeu").style.display = "flex";
        // document.getElementById("mostra-palavra-secreta").innerHTML = "A palavra era " + palavraSecreta;
        exibirDerrota();
    }
    tela.stroke()
    tela.closePath()
  }

  

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function desenharCabeca() {
//     let cabeca = new Image();
//     cabeca.src = "./imagens/emoji02.png";
//     cabeca.addEventListener('load',() => {
//         tela.drawImage(cabeca,560,115)
//     })
// }

// function desenharTronco() {
//     let tronco = new Image();
//     tronco.src = "./imagens/tronco.png";
//     tronco.addEventListener('load',() => {
//         tela.drawImage(tronco,50,50)
//     })
// }

// function desenharBracoEsquerdo() {
//     let bracoEsquerdo = new Image();
//     bracoEsquerdo.src = "./imagens/braco-esquerdo.png";
//     bracoEsquerdo.addEventListener('load',() => {
//         tela.drawImage(bracoEsquerdo,60,60)
//     })
// }

// function desenharBracoDireito() {
//     let bracoDireito = new Image();
//     bracoDireito.src = "./imagens/braco-direito.png";
//     bracoDireito.addEventListener('load',() => {
//         tela.drawImage(bracoDireito,80,80)
//     })
// }

// function desenharPernaEsquerda() {
//     let pernaEsquerda = new Image();
//     pernaEsquerda.src = "./imagens/perna-esquerda.png";
//     pernaEsquerda.addEventListener('load',() => {
//         tela.drawImage(pernaEsquerda,100,100)
//     })
// }

// function desenharPernaDireita() {
//     let pernaDireita = new Image();
//     pernaDireita.src = "./imagens/perna-direita.png";
//     pernaDireita.addEventListener('load',() => {
//         tela.drawImage(pernaDireita,40,40)
//     })
// }

//Alterar com mensagem de FIM DE JOGO
/*function fimDeJogo() {
        tela.fillStyle = "black";
		tela.beginPath();
		tela.moveTo(50, 50);
		tela.lineTo(50, 400);
		tela.lineTo(400, 400);
		tela.fill();
	}*/


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
    tela.font = "bold 52px Inter";
    tela.textBaseline = "bottom";
    tela.lineCap = "round";
    tela.fillStyle = "#0A3871";
    tela.lineWidth = 6;
    let largura = 800/palavraSecreta.length;
    tela.fillText(palavraSecreta[index],273 + (largura * index),540);
}

function escreverLetraIncorreta(letra,erros) {
    tela.font = "bold 40px Inter"
    tela.lineCap = "round";
    tela.fillStyle = "#0A3871";
    tela.lineWidth = 6;
    tela.fillText(letra,270 + (40 * (10 - erros)),720,40);
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
    tela.font = ' bold 42px Inter';
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
    //     tela.clearRect(0,0,1300,860);
        
    // }
    tela.fill = "red";
    tela.font = 'bold 42px Inter';
    tela.lineWidth=6;
    tela.lineCap="round";
    tela.lineJoin="round";
    tela.fillStyle="green";
    tela.fillText("Ganhou,",950,320);
    tela.fillText("Parabéns!",930,360);





    // setTimeout( recarregar , 1000);
}