let slideIndex = 0;
const mas = document.getElementsByClassName('item_1');
const widthItem = document.getElementsByClassName('test')[0].clientWidth;
let dots = document.getElementsByClassName('slider-row-dots__dot');
const lineImage = document.getElementById('container_items');
let animateRun = false;

function slideRun(type) {
  if (!animateRun) {
    animateRun = true;
    for (let i = 0; i < mas.length; i++) {
      if (mas[i].className.indexOf('active') > 0) {
        type === 'left' ? slideIndex = i - 1 : slideIndex = i + 1;
        mas[i].className = 'item_1';
        dots[i].className = 'slider-row-dots__dot';
      }
    }
    if (slideIndex === - 1 && type === 'left') {
      const div = mas[0].cloneNode(true);
      div.className = 'item-1'
      lineImage.appendChild(div);
      lineImage.style.left = '-'.concat(mas.length * widthItem + 'px');
      slideIndex = mas.length - 1;
    }
    if (slideIndex === mas.length && type === 'right') {
      const div = mas[mas.length - 1].cloneNode(true);
      div.className = 'item-1 right';
      lineImage.insertBefore(div, mas[0]);
      lineImage.style.left = '0px';
      slideIndex = 0;
  }
  const id = setInterval(() => move(type, id), 2);
}
}

function move(type, id) {
  if (type === 'right') {
    lineImage.style.left = `${new Number(
      lineImage.style.left.replace('px', ''),
    ) - 1}px`
  } else {
    lineImage.style.left = `${new Number(
      lineImage.style.left.replace('px', ''),
    ) + 1}px`
   }
  if (new Number(lineImage.style.left.replace('px', '')) % widthItem === 0) {
    clearInterval(id);
    if (document.getElementsByClassName('item-1')[0]) {
      if (document.getElementsByClassName('item-1 right')[0]) {
        lineImage.style.left = '0px';
      }
      document.getElementsByClassName('item-1')[0].remove();
    }
    mas[slideIndex].className = 'item_1 active';
    dots[slideIndex].className = dots[slideIndex].className.concat(' active');
    animateRun = false;
  }
}
function getSlide(index) {
  if (!animateRun) {
    animateRun = true;
    mas[slideIndex].className = 'item_1';
    dots[slideIndex].className = 'slider-row-dots__dot';
    dots[index].className = dots[index].className.concat(' active');
    if (slideIndex < index) {
      let i = slideIndex;
      while (i !== index) {
        const id = setInterval(() => move('right', id), 2)
        i++;
      }
    } else {
      let i = slideIndex;
      while (i !== index) {
        const id = setInterval(() => move('left', id), 2)
        i--;
      }
    }
    slideIndex = index;
  }
}