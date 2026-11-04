// pizza
let pquantity = 0;
let ptotal = 0;

function padd() {
    // if more then 10 then alert them 
    if (pquantity >= 10) {
        alert("ARE YOU TRING TO FEED THE ENTIRE NEIGHBORHOOD");
        return;
    }
    pquantity++;
    document.getElementById("p-quantity").textContent = "quantity: " + pquantity;
    ptotal = pquantity * 10.99;
    document.getElementById("p-total").textContent = "Total: $" + ptotal.toFixed(2);
}


function psub() {
    if (pquantity > 0) {
        pquantity--;
        document.getElementById("p-quantity").textContent = "quantity: " + pquantity;
        ptotal = pquantity * 10.99;
        document.getElementById("p-total").textContent = "Total: $" + ptotal.toFixed(2);
    }else{
        alert("Quantity cannot be less than 0");
    }
}

//burger
let bquantity = 0;
let btotal = 0;

function badd() {
    if (bquantity >= 10) {
        alert("ARE YOU TRING TO FEED THE ENTIRE NEIGHBORHOOD");
        return;
    }
    bquantity++;
    document.getElementById("b-quantity").textContent = "quantity: " + bquantity;
    btotal = bquantity * 8.99;
    document.getElementById("b-total").textContent = "Total: $" + btotal.toFixed(2);
}

function bsub() {
    if (bquantity > 0) {
        bquantity--;
        document.getElementById("b-quantity").textContent = "quantity: " + bquantity;
        btotal = bquantity * 8.99;
        document.getElementById("b-total").textContent = "Total: $" + btotal.toFixed(2);
    }else{
        alert("Quantity cannot be less than 0");
    }
}
let totalCost = 0;
function calculateTotalCost() {
    totalCost = ptotal + btotal;
    document.getElementById("total").textContent = "Total: $" + totalCost.toFixed(2);
}

setInterval(calculateTotalCost, 100);