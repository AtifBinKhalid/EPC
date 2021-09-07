  function dark() {
  var audio = new Audio("images/start.mp3");
  audio.volume = 0.3;
  audio.play();
  document.documentElement.classList.toggle('dark-mode');
}
  function play2() {
  var audio = new Audio("images/pew.mp3");
  audio.volume = 0.2;
  audio.play();
  document.getElementsByTagName('nav')[0].className = 'menu';
}

  function play1(){
    var audio = new Audio("images/pew.mp3");
    audio.volume = 0.2;
    audio.play();
    document.getElementsByTagName('nav')[0].className = 'menu menu_active';
  }
 function play3() {
  var audio = new Audio("images/error.mp3");
  audio.volume = 0.3;
  audio.play();
}
function about() {
  var audio = new Audio("images/about.mp3");
  audio.volume = 0.7;
  audio.play();
}
window.onload = function() {
    document.getElementById("Audio").play();
}
function click() {
  var audio = new Audio("images/click.mp3");
  audio.volume = 0.5;
  audio.play();
}