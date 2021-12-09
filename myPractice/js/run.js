let searchInput = () => {
    let msg = '';
    msg += String(document.getElementsByClassName('search-input-box').innerHTML);
    console.log(msg)
    return msg;
}

function clearMemory () {
    document.getElementById('demo').innerHTML = null;
}


function requestData() {
    clearMemory();
    let searchKey =  document.getElementById('input').value;
    console.log(searchKey);

    var request = $.ajax({
        url: "http://api.giphy.com/v1/gifs/search",
        method: "GET",
        data: { q: searchKey, api_key: 'OaI8Scqh6gxKwYuB0TXRiZxeyTICIFcX' },
        dataType: "json"
    });

    request.done(function (msg) {
        let res = msg.data;
        res.forEach(element => {
           document.getElementById('demo').innerHTML += "<img"+ " class=" + "'img-box' " + "src="+element.images.original.url+"'>" 
        });
        console.log(msg.data)
    });

    request.fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
}



