const hex = [ 0,1,2,3,4,5,6,7,8,9,"Α","Β","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
 let hexCol = '#';
 for (let i = 0; i < 6; i++) {
  hexCol +=  hex[GetRandomNumber()];
 }
 color.textContent = hexCol;
 document.body.style.backgroundColor = hexCol;
});

function GetRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}