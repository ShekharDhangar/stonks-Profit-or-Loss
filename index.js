const initialPrice = document.querySelector("#buy-price");
const stockNum = document.querySelector("#stock-num");
const pricesell = document.querySelector("#sell-price");
const calculateBtn = document.querySelector(".calculate-btn");
const output = document.querySelector(".output");

function calculateProfitandLoss(buyPrice,sellPrice,numOfStock){

    if(sellPrice>buyPrice){
        const profit = sellPrice-buyPrice;
        const profitPercentage = ((profit/buyPrice)*100).toFixed(2);
        // return ()
        output.style.color="green";
        output.innerText = "Yay!! Your Profit is "+ profit + " and profit Percentage is "+ profitPercentage + "%"+" :)";

    }else if(buyPrice>sellPrice){
        const loss = buyPrice-sellPrice;
        const lossPercentage = ((loss/buyPrice)*100).toFixed(2);
        output.style.color="red";
        output.innerText= "Whoops!! Your loss is "+loss + " and loss Percentage is "+ lossPercentage + "%"+" :(";
    }else{
        output.style.color="white";
        output.innerText = "No pain No gain, and no gain no pain :)"
    }

    
}

function calculateBtnHandler(){
    const numOfStock = Number(stockNum.value);
    const buyPrice = Number(initialPrice.value) * numOfStock;
    const sellPrice = Number(pricesell.value)* numOfStock;
    calculateProfitandLoss(buyPrice,sellPrice,numOfStock);


}
calculateBtn.addEventListener("click", calculateBtnHandler);
