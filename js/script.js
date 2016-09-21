'use strict'

let timeDOM = document.querySelector('.item__time');
let item = document.querySelector('.item');
let price = document.querySelector('.item__price');
let time = new Date(3600000);

function timeToString() {
  time.setSeconds(time.getSeconds() - 1);

  let timeArr = [time.getMinutes(), time.getSeconds()];

  for (let i = timeArr.length - 1; i >= 0; i--) {
    if (timeArr[i] <10) timeArr[i] = '0' + timeArr[i];
  }
  let clock = timeArr[0] + ':' + timeArr[1];

  timeDOM.innerHTML = clock;

  if (time < 900000 && !item.classList.contains('item--sale')) {
    item.classList.add('item--sale');
    price.innerHTML ='19 <span class="item__rub">&#8381;';
  }

  if (time < 0 && item.classList.contains('item--sale')) {
    price.innerHTML ='-- <span class="item__rub">&#8381;';
    timeDOM.innerHTML = '00:00';
    clearInterval(reload);

    setTimeout(function() {
      item.classList.remove('item--sale');
      price.innerHTML ='59 <span class="item__rub">&#8381;';
      time = new Date(3600000);
      timeToString();
      reload = setInterval(timeToString, 1000);
    }, 10000);
  }
}

timeToString();
let reload = setInterval(timeToString, 1000);
