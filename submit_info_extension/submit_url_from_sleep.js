function submitURL() {
    var current_url = chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        doRequest(tabs[0].url)
    });
}

async function doRequest(url) {
    let script_url = 'https://script.google.com/macros/s/AKfycbxZuObv6PSpNf1SZMVPK7bBgp0oF6iy7J665pyJ4o47aepqtX8pOYYB53GViUy-jIgikg/exec';
    let data = {a: url};
    console.log(data)

    let res = await fetch(script_url, {
        method: 'POST',
        withCredentials: true,    
        crossorigin: true,
        mode: 'no-cors',  
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(data),
    });

    console.log(res)
    let ret = await res.json();
    return JSON.parse(ret.data);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', submitURL, false);
   }, false)