let keys = document.querySelectorAll('.keys');
// let spaceKey = document.querySelector('.space_key');
// let shift_left = document.querySelector('.shift_left');
// let shift_right = document.querySelector('.shift_right');
// let caps_lock_key = document.querySelector('.caps_lock_key');
// let toggle_circle = document.querySelector('.toggle_circle');
// let night_mode = document.querySelector('.night_mode');
// let body = document.querySelector('body');
// let text_input = document.querySelector('.text');
// let change_color = document.querySelector('.change_light_color');
// let colors_input = document.querySelector('.colors_input');
// let keyboard_lights = document.querySelector('.keyboard_lights');
// let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

// for(let i = 0; i < keys.length; i++) {
//     keys[i].setAttribute('keyname', keys[i].innerText);
//     keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
// }

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.add('active')
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.remove('active')
        keys[i].classList.add('remove')
    }
})


// night_mode.addEventListener('click',function() {
//     toggle_circle.classList.toggle('active');
//     body.classList.toggle('active');
//     night_mode.classList.toggle('active');
//     keyboard_wrapp.classList.toggle('active');
//     text_input.classList.toggle('active');
//     change_color.classList.toggle('active');
//     for(let i = 0; i < keys.length; i++) {
//         keys[i].classList.toggle('keys_night')
//     }
// })

// colors_input.addEventListener('input',function() {
//     for(let i = 0; i < keys.length; i++) {
//         keys[i].style.color = colors_input.value
//     }
//     keyboard_lights.style.background = colors_input.value;
// })

// function clicaLetra(e) {
//     let tecla = e
//     console.log(tecla)
//     verificarLetraClicada(tecla)
    
// }

// function myFunction(x) {
//   if (x.matches) {
//     document.getElementById("teclado-virtual").style.display = "flex";
//   } else {
//     document.getElementById("teclado-virtual").style.display = "none";
//   }
// }

// // Create a MediaQueryList object
// const mmObj = window.matchMedia("(max-width: 500px)")

// // Call the match function at run time:
// myFunction(mmObj);

// // Add the match function as a listener for state changes:
// mmObj.addListener(myFunction)

// const matchResult = window.matchMedia("(max-width: 480px)");

function mostrarTeclado() {
    if(window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("teclado-virtual").style.display = "flex";
    } else {
        document.getElementById("teclado-virtual").style.display = "none";
    }
}