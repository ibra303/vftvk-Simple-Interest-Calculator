// calculate interest after user clicked on button
function compute()
{
    var principal = document.getElementById("principal").value; //amount value
    if(principal <= 0){ // if user entered wrong value 
        alert("Enter a positive number !"); // alert message
        document.getElementById("principal").focus(); // focus on principal input box
    }
    else{
    var rate = document.getElementById("rate").value; // rate 
    var years = document.getElementById("years").value; // number of years
    var interest = principal * years * rate /100; // calculate interest 
    var year = new Date().getFullYear()+parseInt(years); // year 
    document.getElementById("result").innerText = "\nIf you deposit " + principal +",\n at an interest rate of "+ rate +"%.\nYou will receive an amount of "+ interest +",\nin the year " + year + "\n";
    }
}

// update rate as user selected
function updateRate() 
{
    var rateval = document.getElementById("rate").value; // get rate value
    document.getElementById("rate_val").innerText=rateval+"%"; // update value
}

        