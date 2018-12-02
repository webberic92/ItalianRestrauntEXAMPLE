//Tax function calculates tax and sets it to variable X.
// the a in Tax(a) is a place holder for price below.
function Tax(a)
{
x = a*0.06
console.log ("Tax "+x);
return x
}

//Starts total price and our items quantities all to be 0.
totalprice = 0;
console.log(totalprice)
totalegg = 0;
totalchx = 0;
totalparm = 0;
totalspght = 0;
totalpizza = 0;

//function to add quantities to our products. Could have done item++ for example totalegg++ instead.
//Used case break statements in replace of multiple IF statements.
function totalpriceswitch(t)
{
switch (t) {
     case 0:
     totalegg = totalegg + 1;
    
        break;
    case 1:
    totalchx = totalchx + 1;
        break;
    case 2:
    totalparm = totalparm + 1;
        break;
    case 3:
    totalspght = totalspght + 1;
        break;
    case 4:
    totalpizza = totalpizza + 1;
        break;
}
//  calls function order.
order(totalegg,totalchx,totalparm,totalspght,totalpizza);
}

//opposite of above function, this function decreases variable by one if called or says no order on record if less than 0.
function totalpriceminus(t)
{
switch (t) {
     case 0:
     if (totalegg > 0)
     {
     totalegg--;
     }
    else
    {
        //uses sweet alert see below.
        swal({   
            title: "You have no Egg parmesan order on our record.",
             type: "warning",   
             confirmButtonColor: "#DD6B55",})
    }
     break;
     
    case 1:
    if (totalchx > 0)
    {
    totalchx--;
    }
    else
    {
        
        swal({   
            title: "You have no Chicken parmesan order on our record.",
             type: "warning",   
             confirmButtonColor: "#DD6B55",})
    }
    break;
    case 2:
    if (totalparm > 0)
    {
    totalparm--;
    }
    else
    {
        swal({title: "You have no Veal parmesan order on our record.",
        type: "warning",   
        confirmButtonColor: "#DD6B55",})
    }
    
    break;
    case 3:
    if (totalspght > 0)
    {
    totalspght--;
    }
    else
    {
        swal({title: "You have no Spaghetti order on our record.",
        type: "warning",   
        confirmButtonColor: "#DD6B55",})
    }
    break;
    case 4:
    if (totalpizza > 0)
    {
    totalpizza--;
    }
    else
    {
        swal({title: "You have no Pizza order on our record.",
        type: "warning",   
        confirmButtonColor: "#DD6B55",})
    }
    break;
}
order(totalegg,totalchx,totalparm,totalspght,totalpizza);
}

//function order uses places holders abcde.
//these are just place holders for totalegg,totalchx,totalparm,totalspght,totalpizza.
//updates price depending on quantity of variables.
function order(a,b,c,d,e)
{
price = 0;
price = price + (a * 10);
price = price + (b * 13);
price = price + (c * 15);
price = price + (d * 9);
price = price + (e * 20)

//sets variable totalprice to be the subtotal of price plus the sum of our Tax function that was running our subtotal.
totalprice = price + Tax(price);

//updates our HMTL to have updated functions outcomes.
//note the .toFixed attributes to set decimal places to two spots.
total.innerHTML = "The sub total for your order is...$" + price.toFixed(2);
taxfinal.innerHTML = "Your total Tax is $" + Tax(price).toFixed(2);
finaltotal.innerHTML = "Your Final total is $"+ totalprice.toFixed(2);
egg.innerHTML = "You have ordered "+ totalegg + " of these";
chx.innerHTML = "You have ordered "+ totalchx + " of these";
parm.innerHTML = "You have ordered "+ totalparm + " of these";
speg.innerHTML = "You have ordered "+ totalspght + " of these";
za.innerHTML = "You have ordered "+ totalpizza + " of these";
}


//Created new function called receipt that displays your total of iteams 
// and verifies your items total is 1 or greater to apply the "s" or not.
function receipt()
{
 //words starts out blank
words = "";

words = words + "Your order contains "+ "\n";

if(totalegg > 0)
{
        words = words + totalegg + " Egg parmesan";

        if (totalegg > 1)
        {
            words = words + "s" 
        }
        words = words + "\n";
}
if(totalchx > 0)
{
        words = words + totalchx + " Chicken parmesan";

        if (totalchx > 1)
        {
            words = words + "s"
        }
        words = words + "\n";
}
if(totalparm > 0)
{
        words = words + totalparm + " Veal parmesan";

        if (totalparm > 1)
        {
            words = words + "s"
        }
        words = words + "\n";
}
if(totalspght > 0)
{
        words = words + totalspght + " Spaghetti";

        if (totalegg > 1)
        {
            words = words + "s"
        }
        words = words + "\n";
}
if(totalpizza > 0)
{
        words = words + totalpizza + " Pizza";

        if (totalpizza > 1)
        {
            words = words + "s"
        }
        words = words + "\n";
}
return words;


}

//used sweet alert for some sweet alerts!
// had to install swal "npm install sweetalert --save"
//added below to menugpage.html head.
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"> </script>
//Uses if else statement to confirm if total price is 0 you have not order anyting else show list of stuff ordered.
function JSconfirm() {

    if(totalprice == 0){
        console.log("if statement worked.")
        swal({
            title: "You have not ordered anything!",
             type: "warning", 
             showConfirmButton: false,  
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55", 
             cancelButtonText: "Lets go back and order I am hungry.",  


        })
        
    }
    else {
    swal({   
            title: "Your account is about to be charged for the order!" + "\n" + receipt(),   text: "Are you sure you want your account to be charged $" + totalprice.toFixed(2)  + " ?",
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55", 
             cancelButtonText: "No, do not order!",  
             confirmButtonText: "Yes, Confirm Order!",   
             closeOnConfirm: false,
             
           }, function(){   
              swal({
                  title: "Congratulations!",
                  text: "A charge of $" + totalprice.toFixed(2) + " has been deducted from your account." + "Your Food has been ordered.",
                  type: "success",
                
              }, 
              //takes you to review form after hitting OK
              function(){
                window.location.href = "ReviewForm.html";
              })
        });}}


















// function Tax(a)
// {
// x = a*0.06
// console.log ("Tax "+x);
// return x
// }

// totalprice = 0;
// console.log(totalprice)
// totalegg = 0;
// totalchx = 0;
// totalparm = 0;
// totalspght = 0;
// totalpizza = 0;

// function totalpriceswitch(t)
// {
// switch (t) {
//      case 0:
//      totalegg = totalegg + 1;
//         break;
//     case 1:
//     totalchx = totalchx + 1;
//         break;
//     case 2:
//     totalparm = totalparm + 1;
//         break;
//     case 3:
//     totalspght = totalspght + 1;
//         break;
//     case 4:
//     totalpizza = totalpizza + 1;
//         break;
// }
// order(totalegg,totalchx,totalparm,totalspght,totalpizza);
// }

// function order(a,b,c,d,e)
// {
// price = 0;
// price = price + (a * 10);
// price = price + (b * 13);
// price = price + (c * 15);
// price = price + (d * 9);
// price = price + (e * 20)
// totalprice = price + Tax(price);


// //ORIG : total.innerHTML = "The total for your order is...$" + price + " + Tax " + Tax(price).toFixed(2) + " = "+ totalprice;
// total.innerHTML = "The sub total for your order is...$" + price;
// taxfinal.innerHTML = "Your total Tax is $" + Tax(price).toFixed(2);
// finaltotal.innerHTML = "Your Final total is $"+ totalprice;
// }



// // had to install swal "npm install sweetalert --save"
// //added below to menugpage.html.
// // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
// //<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"> </script>
// function JSconfirm() {
//     swal({   
//             title: "Your account is about to be charged for the order!",   text: "Are you sure you want your account to be charged $" + totalprice  + " ?",
//              type: "warning",   
//              showCancelButton: true,   
//              confirmButtonColor: "#DD6B55", 
//              cancelButtonText: "No, do not order!",  
//              confirmButtonText: "Yes, Confirm Order!",   
//              closeOnConfirm: false,
             
//            }, function(){   
//               swal({
//                   title: "Congratulations!",
//                   text: "A charge of $" + totalprice + " has been deducted from your account." + "Your Food has been ordered.",
//                   type: "success",
                
//               }, 
//               function(){
//                 window.location.href = "ReviewForm.html";
//               })
//         });
