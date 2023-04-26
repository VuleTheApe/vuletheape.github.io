var accountAddress;
var connected = 0;
var balance = 0
document.getElementById("connect-wallet").addEventListener("click", event => {
    if (connected == 0){
        let button = event.target;
        ethereum.request({method: "eth_requestAccounts"}).then(accounts => {
            accountAddress = accounts[0];
            ethereum.request({method: "eth_getBalance", params: [accountAddress, "latest"]}).then(result =>{
                let wei = parseInt(result,16);
                let balance = wei / (10**18);
                console.log(balance + "ETH");
            })
        connected = 1;
        document.getElementById("balance").style.visibility = "visible";
        document.getElementById("balance").innerHTML = balance.toFixed(4);
        document.getElementById("connect-wallet").title="Copy to clipboard";
        document.getElementById("connect-wallet-wrapper").innerHTML += '<img id="copy-ico" class="copy-ico" src="thumbs/copy-icon.svg"></img>';
        document.getElementById("connect-wallet").innerHTML = accountAddress;
        })
    } else {
        navigator.clipboard.writeText(accountAddress);
        console.log(accountAddress, " copied to clipboard");
    }
})
document.getElementById("donate-button").addEventListener("click", () => {
    params = [{
          from: accountAddress,
          to: '0x95686ebdE122E369c12409ECFA94ab08b0610246',
          value: '0xAA87BEE538000',
        }];

    ethereum.request({method: 'eth_sendTransaction', params,}).then((result) => {
        console.log(result)
})
        .catch((error) => {
            console.log(error)
        });
})