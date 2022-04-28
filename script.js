let cor = document.getElementById('rgb-color');
let divRespostas = document.getElementById('respostas');

rgbResposta = '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

cor.innerHTML = rgbResposta;


function addRespostas(){
  for (let index = 0; index < 6; index += 1){
    let circulo = document.createElement('div');
    circulo.classList.add('ball');
    divRespostas.appendChild(circulo);
  }
}
addRespostas();


function colorBall(){
  for (let index = 0; index < 6; index += 1){
    let bolas = document.getElementsByClassName('ball')[index];
    bolas.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
  }
}
colorBall();





let randomAnswer = Math.floor(Math.random() * 10);
if(randomAnswer > 5){
  randomAnswer = 5;
}

let correta = document.getElementsByClassName('ball')[randomAnswer];
correta.style.backgroundColor = 'rgb' + rgbResposta;



