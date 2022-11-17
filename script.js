var request = new XMLHttpRequest();

request.open('GET', "https://hplussport.com/api/products");
request.onload = function () {
    var response = request.response;
    var parseData = JSON.parse(response);
    console.log(parseData);
}

request.send();

