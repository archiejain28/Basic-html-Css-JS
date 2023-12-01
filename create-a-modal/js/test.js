
const btn1 = document.getElementsByClassName("container_button");
const btn2 = document.getElementsByClassName("box_button");

btn1[0].onclick = function(){
   document.getElementById('container').classList.add('hide');
   const boxx = document.getElementById('box')
   boxx.classList.remove('hide');
   document.getElementsByTagName('body')[0].style.backgroundColor ='grey';
   boxx.style.backgroundColor = 'white';
}

btn2[0].onclick = function(){
      document.getElementById('box').classList.add('hide');
      document.getElementById('container').classList.remove('hide');
      document.getElementsByTagName('body')[0].style.backgroundColor ='white';
}

