'use strict' ;

let Userage  = prompt('Is your age between(18-50)y?');



switch(Userage.toLowerCase()) {
case 'yes' :
case  'y' :
  // console.log('correct')
  alert('this is fine');
  break;

case 'no' :
case  'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

}

let Uasck = prompt('Do you suffer from diseases?');
switch(Uasck.toLowerCase()) {
case 'yes' :
case  'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case  'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

}
let Udrink = prompt('Do you drink coffee or tea?');
switch(Udrink.toLowerCase()) {
case 'yes' :
case  'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case  'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;

}

let Ubreak = prompt('Do you eat breakfast early?');
switch(Ubreak.toLowerCase()) {
case 'yes' :
case  'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case  'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;
}

let Uweight = prompt('Do you weigh between 45-60?');
switch( Uweight.toLowerCase()) {
case 'yes' :
case  'y' :
  // console.log('correct')
  alert('this is suitable');
  break;

case 'no' :
case  'n' :
  // console.log('Incorrect')
  alert('This age is not suitable') ;
  break;
}

let Username =prompt('what is your name ?');

alert('Welcome to our site '  +  Username   +   'we hope you like it') ;
let score =0 ;


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



let Bestfood =['apple','chiken','coffe','choclate','Pepsi','meat'];
// console.log(Bestfood);
for(let i=0;i<6;i++){
  let Bfood =prompt('what is  the example of healthy food?') ;

  if(Bfood===Bestfood[0]){
    alert('That is right' );
    score ++ ;
    alert(`Your score is  ${score}`);
    break;

  }
  // else if (Bfood===Bestfood[1]){
  //   Bfood=prompt('wrong guess');

  // }
  // else if (Bfood===Bestfood[2]){
  //   Bfood==prompt('wrong guess');
  // }
  // else if (Bfood===Bestfood[3]){
  //   Bfood==prompt('wrong guess');
  // }
  // else if (Bfood===Bestfood[4]){
  //   Bfood==prompt('wrong guess');
  // }
  // else if (Bfood===Bestfood[5]){
  //   Bfood==prompt('wrong guess');}
  
  else 
  {  
    alert('wrong guess,try again') ;
  }
}
alert('you finished your attempts');
for(let x=0;x<Bestfood.length;x++){
  console.log(Bestfood);


}
alert(`Your score is  ${score}`);
 
 














