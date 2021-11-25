const getConvertButton = document.querySelector(".getConversion");
let url = "https://api.coindesk.com/v1/bpi/currentprice.json"; 
getConvertButton.addEventListener("click",getConvertedCurrency)


function getConvertedCurrency() {
     fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        let convertedCurrency = document.getElementById("convertedCurrency");
        let amountOfCurrency = document.getElementById("currency").value;
        let ConversionRate = 0;
        if(document.getElementById("selectCurrency").value === document.getElementById("selectCurrency").options[0].text)
        {
            let ConversionRate = parseFloat(data.bpi.GBP.rate.replace(",",""));
            console.log(ConversionRate)
        }
        else if(document.getElementById("selectCurrency").value === document.getElementById("selectCurrency").options[1].text){
            let ConversionRate = parseFloat(data.bpi.GBP.rate.replace(",",""));
        }
        else if(document.getElementById("selectCurrency").value === document.getElementById("selectCurrency").options[2].text)    {
            let ConversionRate = parseFloat(data.bpi.GBP.rate.replace(",",""));

        }
        convertedCurrency.value = ConversionRate*amountOfCurrency;  
        console.log(convertedCurrency.value);

    })


}