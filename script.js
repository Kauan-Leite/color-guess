let cor = document.getElementById('rgb-color');
let divRespostas = document.getElementById('respostas');
let score = document.getElementById('score');
let scoreValue = 0;

score.innerHTML = 'Score: ' + scoreValue;


function createRandomColor(){
  rgbResposta = '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

  cor.innerHTML = rgbResposta;
}
createRandomColor();


function addAllCircles(){
  for (let index = 0; index < 6; index += 1){
    let circulo = document.createElement('div');
    circulo.classList.add('ball');
    circulo.classList.add('wrong')
    divRespostas.appendChild(circulo);
  }
}
addAllCircles();


function addColorsBalls(){
  for (let index = 0; index < 6; index += 1){
    let bolas = document.getElementsByClassName('ball')[index];
    bolas.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
  }
}
addColorsBalls();




function circleCorrect(){
  let randomAnswer = Math.floor(Math.random() * 10);
  if(randomAnswer > 5){
    randomAnswer = 5;
  }
  
  let correta = document.getElementsByClassName('ball')[randomAnswer];
  correta.style.backgroundColor = 'rgb' + rgbResposta;
  
  correta.classList.remove('wrong');
  correta.classList.add('correct');
  
}
circleCorrect();


let returnAnswer = document.getElementById('answer');

function forResult(){
  let allBals = document.getElementsByClassName('ball');

  for(let index = 0; index < allBals.length; index += 1){
    function resultResposta(){
      if(allBals[index].classList.contains('wrong')){
        returnAnswer.innerHTML = 'Errou! Tente novamente!'
      }
      else if(allBals[index].classList.contains('correct')){
        returnAnswer.innerHTML = 'Acertou!'
        scoreValue += 3;
        score.innerHTML = 'Score: ' + scoreValue;
      }
    }
    allBals[index].addEventListener('click', resultResposta)
  }
}
forResult();


let btnReset = document.getElementById('reset-game');


function resetColors(){
  divRespostas.innerHTML = '';
  createRandomColor();
  addAllCircles();
  addColorsBalls();
  circleCorrect();
  returnAnswer.innerHTML = 'Escolha uma cor';
  forResult();
}

btnReset.addEventListener('click', resetColors)