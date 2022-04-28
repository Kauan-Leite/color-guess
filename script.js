let cor = document.getElementById('rgb-color');
let divRespostas = document.getElementById('respostas');

rgbResposta = '(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

cor.innerHTML = rgbResposta;


function addRespostas(){
  for (let index = 0; index < 6; index += 1){
    let circulo = document.createElement('div');
    circulo.classList.add('ball');
    circulo.classList.add('wrong')
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




function correct(){
  let randomAnswer = Math.floor(Math.random() * 10);
  if(randomAnswer > 5){
    randomAnswer = 5;
  }
  
  let correta = document.getElementsByClassName('ball')[randomAnswer];
  correta.style.backgroundColor = 'rgb' + rgbResposta;
  
  correta.classList.remove('wrong');
  correta.classList.add('correct');
  
}
correct();





let returnAnswer = document.getElementById('answer')
let allBals = document.getElementsByClassName('ball');

for(let index = 0; index < allBals.length; index += 1){
  function resposta(){
    if(allBals[index].classList.contains('wrong')){
      returnAnswer.innerHTML = 'Errou! Tente novamente!'
    }
    else if(allBals[index].classList.contains('correct')){
      returnAnswer.innerHTML = 'Acertou!'
    }
  }
  allBals[index].addEventListener('click', resposta)
}

