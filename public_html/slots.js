
 var symbolsList = ["bar: ","bell: ","cherries: ","orange: ","plum: "];

var winnings = 0;
var betAmount = Number(prompt("Enter your bet amount"));




//event listen for slot pull
document.getElementById('lever').addEventListener('click', random);

       

//Slot machine selection function

function random(){
  
  for(i=1;i<=3;i++){
  g = Math.floor(Math.random() * 5);  
  
  if(i===1){
      var symbolOne = symbolsList[g];
           }else if(i===2){
            var symbolTwo = symbolsList[g]; 
           }else if(i===3){
            var symbolThree = symbolsList[g];
            //Second if compareing symbols
           }
    }
        
       if(symbolOne === symbolTwo && symbolOne === symbolThree){
          document.write(symbolOne+symbolTwo+symbolThree+"<br>");
          document.write("You matched THREE!!! You win a big kid prize!");
          winnings = winnings + betAmount*3;
          
       }else if(symbolOne === symbolTwo || symbolOne === symbolThree || symbolTwo ===symbolThree){
          document.write(symbolOne+symbolTwo+symbolThree+"<br>");
           winnings = winnings + betAmount*2;
          document.write("You matched TWO!!! You win a kid prize! <br>" + "Total winnings, " + winnings);  
          
       }else {
           document.write("Better luck next time...<br>" + "Total winnings, " + winnings);
           winnings = winnings - betAmount;
       }  
       
             
      
   }
  
    //end of function                
  
   
  
   
   