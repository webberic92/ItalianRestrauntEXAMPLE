//Sum of number N calculator
 let n = 4
 sum = (n * (n+1)/2);
 console.log(sum);



//Factorial calculator
function factorialize(num) {
     result = num;
     //0! and 1! just equals 1 so returns 1.
    if (num == 0 || num == 1) 
      console.log("the factorial is 1")
      // while num is greater then 1 decrement by 1 each time
    while (num > 1) { 
      num--;
      // Same as writing result *= num;
      result = result * num;
    }
   console.log("the factorial results are " + result)
  }
  factorialize(6);




  let num=100;

while( num>=1){
console.log(num)
num--
if(num == 7){
    console.log("It hit 7!")
    break;
    
    
}
}


