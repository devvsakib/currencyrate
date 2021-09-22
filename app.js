const sendInput = document.getElementById('sendInput')
sendInput.addEventListener('click', getExchangeRate);

function getExchangeRate() {
    
    //creating new HTTP request
    const convertRate = new XMLHttpRequest();
    //opening API docs
    convertRate.open('GET', 'https://api.currencyfreaks.com/latest?apikey=599c91d242f3434baabef7da4c535695', true);
    //creating onload function
    convertRate.onload = function () {
        let getInput = document.getElementById('getInput')
        let showHere = document.getElementById('showHere')
        let getingData = JSON.parse(this.responseText);
        getInput = getInput.value.toUpperCase();
        if (getInput.length !== 0 || getInput !== undefined){
            showHere.innerText = getingData.rates[getInput];
        }else{
            showHere.innerText = 'Input Valid Currency'
        }
    }
    
    convertRate.send();

}