var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);




function submitHandler(){

    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip && qty &&curr) {
        const result = calculateProfitAndLoss(ip, qty, curr);
    
    } else {
    outputBox.innerText = "Please enter all fields";
    }
}

function calculateProfitAndLoss(initial, quantity,current) {
    if(initial > current) {
        var loss = (initial-current)*quantity;
        var lossPercentage = ((loss/initial)*100).toFixed(2);

        showoutput('Hey the loss is ' + loss +' and the percentage is ' + lossPercentage + '%');
    } else if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPercentage =((profit/initial)*100).toFixed(2);
        
        showoutput('Hey the profit is ' + profit +' and the percentage is ' + profitPercentage + '%');
    } else {
        showoutput('No pain no gain and no gain no pain')

    }
}


function showoutput(message) {
    outputBox.innerText = message;
}