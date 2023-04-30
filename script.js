const pika = document.querySelector('.pika');
const poop = document.querySelector('.poop');

const jump = () => {
    document.getElementById("text-start").style.color = "white";

  pika.classList.add('jump');

  setTimeout(() => {
    pika.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {

    console.log('loop')

  const poopPosition = poop.offsetLeft;
  const pikaPosition = +window.getComputedStyle(pika).bottom.replace(`px`, '');

  console.log(pikaPosition);

  if (poopPosition <= 120 && poopPosition > 0 && pikaPosition < 85) {

    poop.style.animation = 'none';
    poop.style.left = `${poopPosition}px`;

    poop.src = "img/dance.gif";
    poop.style.width = "120px";
    poop.style.marginLeft = "30px";
    

    pika.style.animation = 'none';
    pika.style.bottom = `${pikaPosition}px`;

    pika.src = "img/pika2.gif";
    pika.style.width = '120px'
    pika.style.marginLeft = '30px'

    clearInterval(loop);

    document.getElementById("text-start").style.color = "black";
    document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";

  }
}, 10);

document.addEventListener('keydown', jump);
