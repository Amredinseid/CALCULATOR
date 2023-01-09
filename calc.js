let output= document.getElementById('screen')

function  display(num){
    output.value+=num;
}
function calc(){
 try{
    output.value=eval(output.value);
 }
 catch{
    alert("ERROR")
 }
}
function clr(){
    output.value=" ";

}
function del(){
    output.value=output.value.slice(0,-1)
}
let txt=document.getElementById("screen");
setInterval(changeColor,500);
function changeColor(){
  let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
 
  txt.style.background="RGB("+r+","+g+","+b+")";
  
  
  
}