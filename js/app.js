'use strict' ;
let score = 0;
function q1(){

let Userage  = prompt('Is your age between(18-50)y?');


switch(Userage.toLowerCase()) {
case 'yes' :
case 'y' :
  // console.log('correct')
  alert('this is fine');
  break;

case 'no' :
case 'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

  }
}
q1();

function q2(){

let Uasck = prompt('Do you suffer from diseases?');
switch(Uasck.toLowerCase()) {
case 'yes' :
case 'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case 'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

 }
}
q2();


function q3(){
let Udrink = prompt('Do you drink coffee or tea?');
switch(Udrink.toLowerCase()) {
case 'yes' :
case 'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case 'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

 }
}

q3();

function q4(){
let Ubreak = prompt('Do you eat breakfast early?');
switch(Ubreak.toLowerCase()) {
case 'yes' :
case 'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case 'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;
 }
}
q4();



function q5(){
let Uweight = prompt('Do you weigh between 45-60?');
switch( Uweight.toLowerCase()) {
case 'yes' :
case 'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case 'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;
 }
}
q5();



function q6(){

let Username =prompt('what is your name ?');

alert('Welcome to our site ' + Username + 'we hope you like it') ;



for(let i=0;i<=4;i++){
  let num =prompt('Guess A number please');
  num =Number(num);
  if (num===4){
    alert('correct');
    score++;
    break;
  }else if(num<4){
    alert('Too Low');

  }else if (num>4){
    alert('Too high');
  }else {
    alert('The correct Answer is 4') ;
  }

 }
}
q6();


function q7(){

let Bestfood =['apple','chiken','coffe','choclate','Pepsi','meat'];
// console.log(Bestfood);
for(let i=0;i<6;i++){
  let Bfood =prompt(' guess the example of healthy food?') ;

  for(let x=0;x<Bestfood.length;x++){
    console.log(Bestfood);
    if(Bfood===Bestfood[x]){
      alert('That is right' );
      score ++ ;
      i=20;
      break;

    }
  }

  if(i===5){
    alert('you finished your attempts'+Bestfood);
  }
  
 }
 alert('Your score is' + score);
}
q7();











