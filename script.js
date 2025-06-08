expandable = document.getElementById(
 "msg");

messageOne = document.getElementById(
 "msg-1");
messageTwo = document.getElementById(
 "msg-2");

var buttons = document
 .getElementsByClassName("btn");
var sections = document
 .getElementsByTagName("section");

function changeBg() {

 var randomColor = Math.floor(Math
  .random() *
  16777215).toString(16);

 for (var i = 0; i < buttons
  .length; i++) {
  buttons[i].style.color = "#" +
   randomColor;
 }

 expButton.style.background = "#" +
  randomColor;

 console.log(button.style
  .color);
}


setInterval(changeBg,
 900);

var expanded = false;

expButton = document.getElementById(
 "min");

function expMin() {
 if (expanded) {
  // expandable.style.opacity = "0%";
  expandable.style.marginBottom =
   "-15px";
  expandable.style.fontSize = "0"
  expButton.innerHTML = "+";
  expanded = false;
 } else {
  // expandable.style.opacity = "100%";
  expandable.style.marginBottom =
   "20px";
  expandable.style.fontSize = "12pt";
  expButton.innerHTML = "-";
  messageOne.innerHTML =
   "Eae, cara. Fazendo 22 anos, né? Sei que faz tempo que a gente não se fala, mas decidi fazer esse simples site pra te desejar um feliz aniversário! Que você ainda tenha muitos anos de vida e felicidade pela frente.";
  messageTwo.innerHTML =
   "Você melhorou bastante em arte. Espero que continue assim e ganhe muito sucesso no futuro. Boa sorte e tudo de bom pra você!<br><br>Atenciosamente, <strong id='my-name'>GGGamer</strong>.";
  expanded = true;
 }
}



chest = document.getElementById(
 "chest")
chestImage = document.getElementById(
 "chest-image")
games = document.getElementById(
 "games")

function openTrue() {
 games.style.display = "block";
 chest.style.display = "none";
}

function openTreasure() {
 chest.style.opacity = "0%";
 setTimeout(openTrue, 1000);
}

body = document.body;
title = document.getElementById(
 "title");
isDark = true;
dlight = document.getElementById(
 "darkLight");

msgCtn = document.getElementById(
 "msg-ctn");

function darkLight() {
 if (isDark) {
  msgCtn.style.background = "";
  sections[0].style.background = "";
  sections[1].style.background = "";
  body.style.background = "";
  title.style.background = "";
  dlight.style.filter = "";
  isDark = false;
 } else {
  msgCtn.style.background = "#5656cc";
  sections[0].style.background =
   "#77c";
  sections[1].style.background =
   "#77c";
  body.style.background = "#151515";
  title.style.background = "#55c";
  dlight.style.filter =
   "invert(100%)";
  isDark = true;
 }
}
