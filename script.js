let mas = document.getElementsByClassName("item");
let Dot = document.getElementsByClassName("slider-row-dots__dot");
let elem = document.getElementById("item");
//mas[slideIndex].style.left = 0 + "px";
let animRun = false;
// запомнить время начала
let current = 0;

function c() {
  while (current < 3) {
    m();
    console.log("цикл кончился")
  }
 
}

function b() {
  if (!animRun) {
    m();
  }
}

function m() {
  animRun = true;
  let start = Date.now();
  let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    if (timePassed >= 5000) {
      clearInterval(timer); // закончить анимацию через 2 секунды
      animRun = false;
      current++;
     // alert()
      return 0 ;
    }

    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    draw(timePassed);
  }, 2);
}

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  elem.style.left = timePassed / 8 + "px";
}
