var timeDOM = document.querySelector('.item__time');
var item = document.querySelector('.item');
var price = document.querySelector('.item__price');
var time = new Date(3600000);

function timeToString() {
  time.setSeconds(time.getSeconds() - 1);

  var timeArr = [];
  timeArr[0] = time.getMinutes();
  timeArr[1] = time.getSeconds();
  for (var i = timeArr.length - 1; i >= 0; i--) {
    if (timeArr[i] <10) timeArr[i] = '0' + timeArr[i];
  }
  var clock = timeArr[0] + ':' + timeArr[1];

  timeDOM.innerHTML = clock;

  if (time < 900000 && !item.classList.contains('item--sale')) {
    item.classList.add('item--sale');
    price.innerHTML ='19 <span class="item__rub">&#8381;';
  }

  if (time < 0 && item.classList.contains('item--sale')) {
    item.classList.remove('item--sale');
    price.innerHTML ='59 <span class="item__rub">&#8381;';
    time = new Date(3600000);
    timeToString();
  }
}

timeToString();
setInterval(timeToString, 1000);
