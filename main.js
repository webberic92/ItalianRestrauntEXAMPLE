
function Tax(a)
{
x = a*0.06
console.log ("Tax "+x);
return x
}

totalprice = 0;
console.log(totalprice)
totalegg = 0;
totalchx = 0;
totalparm = 0;
totalspght = 0;
totalpizza = 0;

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
order(totalegg,totalchx,totalparm,totalspght,totalpizza);
}

function order(a,b,c,d,e)
{
price = 0;
price = price + (a * 10);
price = price + (b * 13);
price = price + (c * 15);
price = price + (d * 9);
price = price + (e * 20)
totalprice = price + Tax(price);


//ORIG : total.innerHTML = "The total for your order is...$" + price + " + Tax " + Tax(price).toFixed(2) + " = "+ totalprice;
total.innerHTML = "The sub total for your order is...$" + price;
taxfinal.innerHTML = "Your total Tax is $" + Tax(price).toFixed(2);
finaltotal.innerHTML = "Your Final total is $"+ totalprice;
}



// had to install swal "npm install sweetalert --save"
//added below to menugpage.html.
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"> </script>
function JSconfirm() {
    swal({   
            title: "Your account is about to be charged for the order!",   text: "Are you sure you want your account to be charged $" + totalprice  + " ?",
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55", 
             cancelButtonText: "No, do not order!",  
             confirmButtonText: "Yes, Confirm Order!",   
             closeOnConfirm: false,
             
           }, function(){   
              swal({
                  title: "Congratulations!",
                  text: "A charge of $" + totalprice + " has been deducted from your account." + "Your Food has been ordered.",
                  type: "success",
                
              }, 
              function(){
                window.location.href = "ItalianRest.html";
              })
        });
  }