let keys = document.querySelectorAll('.keys');

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.add('active');
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
    }
})

function mostrarTeclado() {
    if(window.matchMedia("(max-width: 480px)").matches) {
        document.getElementById("teclado-virtual").style.display = "flex";
    } else {
        document.getElementById("teclado-virtual").style.display = "none";
    }
}