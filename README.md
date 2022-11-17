# first-api-request
LinkedIn Learning | "Introduction to Web APIs" | Section 3 | First API Request

Started with blank .js script file

1) start request with creating XMLHttpRequest object
create variable (var) and call it request
to create object we used key word new and then XMLHttpRequest();

2) use request object to open a connect to the API 
use request.open()

3) this method will have 2 arguments
1 - Get Request
2 - URL we want to connect to for our API (get from the API documentation, base URL to connect to the API)

4) create function to do something with the API response
use request.onload to trigger this function
then run function = function () {

5) create function that we call var response
use this to create the API response
use request parameter response
request.response;

6) convert to javascript object
response we get will come as a string
JSON.parse()
argument it'll take is the data we want to parse
in this case the response variable
we'll call this var parseData = JSON.parse(response);

7) print to console
console.log(parseData);

8) send request
}
request.send();

9) save then go back to the browser to test and see the response
10) ctrl shift j to see the console
11) ctrl r to refresh the page
12) expand to see all products returned in the response

