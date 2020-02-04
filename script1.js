 let slideIndex = 0;
let mas = document.getElementsByClassName("item");
let Dot = document.getElementsByClassName("slider-row-dots__dot");
Dot[slideIndex].className += " active";
let animationRun = 0;
mas[slideIndex].style.left = 0 + "px";
let pos = 0;
let id;
 

  function slideShowR() {
  if (animationRun) {
    console.log("qweqweqw");
  } else { animationRun = true;
    console.log('зашел ' + animationRun + '    ' + slideIndex)
    pos = 0;
    //console.log(pos);
    //console.log(id);
    id = setInterval(frameR, 10)
   // id = setInterval(frameR, 10);

    if (slideIndex === mas.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    console.log('Вышел ' + animationRun + '    ' + slideIndex)
  }
}
function frameR() {
  if (pos === -290) {
    clearInterval(id);
    animationRun = false
  } else {
    animationRun = true;
    pos--;
    if (slideIndex === 0) {
      mas[mas.length - 1].style.left = pos + "px"; // если 0, то берем последний элемент массива вместо -1
      Dot[mas.length - 1].className = Dot[mas.length - 1].className.replace(
        " active",
        ""
      );
    } else {
      mas[slideIndex - 1].style.left = pos + "px";
      Dot[slideIndex - 1].className = Dot[slideIndex - 1].className.replace(
        " active",
        ""
      );
    }

    mas[slideIndex].style.left = 290 + pos + "px";
    Dot[slideIndex].className += " active";
  }
}

function slideShowL() {
  if (animationRun) {
    console.log("qweqweqw");
  } else {
    //console.log(pos);
   // console.log(id);
   console.log('зашел ' + animationRun + '    ' + slideIndex)
    pos = 0;
    animationRun = true;
    id = setInterval(frame, 10);

    if (slideIndex === 0) {
      slideIndex = mas.length - 1;
    } else {
      slideIndex--;
    }
    console.log('Вышел ' + animationRun + '    ' + slideIndex)
  }
}
function frame() {
  if (pos === 290) {
    clearInterval(id);
    animationRun = false;
  } else {
    pos++;
    if (slideIndex === mas.length - 1) {
      mas[0].style.left = pos + "px";
      Dot[0].className = Dot[0].className.replace(" active", "");
    } else {
      mas[slideIndex + 1].style.left = pos + "px";
      Dot[slideIndex + 1].className = Dot[slideIndex + 1].className.replace(
        " active",
        ""
      );
    }
    mas[slideIndex].style.left = -290 + pos + "px";
    Dot[slideIndex].className += " active";
  }
}
function getSlide(num) {
   console.log(slideIndex)
  if (num !== slideIndex && num < slideIndex) {
    while (num !== slideIndex) {
      console.log(num + " " + slideIndex);
      setInterval(slideShowL(),15)
      
    }
  } else if (num !== slideIndex && num > slideIndex) {
    while (num !== slideIndex) {
      console.log(num + " " + slideIndex);
      setInterval(slideShowR(),15)
     
    }
  } 

  /* for(let i = 0; num != slideIndex ; i++) {
    console.log(num + " " + slideIndex);
    window.requestAnimationFrame(slideShowL())
    
  }*/
console.log("Vse")
console.log(num + " " + slideIndex);
 
}
 
