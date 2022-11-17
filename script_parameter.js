var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=2&order=name');

/*?qty=2 will return 2 products
use & for more than one parameter
will show 2 products ordered by their name*/

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
};

request.send();