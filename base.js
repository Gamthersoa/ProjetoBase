const ligar = document.getElementById('Ligar');
const desligar = document.getElementById('Desligar');
const lamp = document.getElementById('lamp');


function lampLigar() {
    lamp.src = './img/sabreon.png';
}

function lampDesligar() {
    lamp.src = './img/sabre.png';
}

ligar.addEventListener('click', lampLigar);
desligar.addEventListener('click', lampDesligar);
ligar.addEventListener('mousemove', lampLigar);
Desligar.addEventListener('mousemove', lampDesligar);


