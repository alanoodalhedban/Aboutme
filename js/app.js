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

let num =prompt('Guess A number please');
num =Number(num);
for(let i=0;i<=4;i++){
  if (num===4){
    alert('correct');
    break;
  }else if(num<4){
    alert('Too Low');
    num =prompt('guess the number again');

  }else if (num>4){
    alert('Too high');
    num=prompt('guess the number a gain');
  }else {
    alert('The correct Answer is 4') ;
  }
    
}

let score =0 ;
let Bfood =prompt('what is healthy food?') ;
let Bestfood =['appl','fruit','orange','Vegetables'];
for(let i=0;i<Bestfood.length;i++){

  if(Bfood===Bestfood[i])
  {
    alert('correct'  +  Bestfood[i] );
    score ++ ;
    
    alert(`Your score is  ${score}`);
   
  } 
  
       
        

 
}














