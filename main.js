function getCryptoPrices() {
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.coinlayer.com/live?symbols=BTC,ETH,LTC&access_key=baef5a285e99fc40d452085a7848b49c");
xhr.send();
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log("Bitcoin: " + data.rates.BTC + " USD");
    console.log("Ethereum: " + data.rates.ETH + " USD");
    console.log("Litecoin: " + data.rates.LTC + " USD");
    if(document.getElementById("btc-price")){
        document.getElementById("btc-price").innerHTML = data.rates.BTC + " USD";
    }
    if(document.getElementById("eth-price")){
        document.getElementById("eth-price").innerHTML = data.rates.ETH + " USD";
    }
    if(document.getElementById("ltc-price")){
        document.getElementById("ltc-price").innerHTML = data.rates.LTC + " USD";
    }
  }
};
