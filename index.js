let counter = document.querySelector('.counter');

let reset =  document.querySelector('.reset');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

let count = 0;
alert('Hello everyone! I made this website for repeating skills of JavaScript and I hope you enjoy this website');
confirm('Lets start to up counter!');


plus.onclick = function(){
  count += 1;
  counter.innerHTML = count;
}


minus.onclick = function(){
  count -= 1;
  counter.innerHTML = count;
}


reset.onclick = function(){
  count = 0;
  counter.innerHTML = count;
}
