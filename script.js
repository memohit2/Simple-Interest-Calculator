function compute()
{
   var  p = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;


     if(p <= 0) {
         alert("Enter a positive number");
         return false;
     }

    var interest = (p* years * rate)/ 100;
     var year = new Date().getFullYear()+parseInt(years);

 var res = document.getElementById("results");

res.innerHTML= "If you deposit <mark>"+p+" </mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark> \<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"


}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


        