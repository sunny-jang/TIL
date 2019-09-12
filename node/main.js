/* Hello World in NodeJS */
// console.log("Hello, World!");
var http = require("http");

http.createServer(function(request, response) {
  /*
    HTTP 헤더 전송
    HTTP Satus: 200 : OK
    Content Type: text/plain
  */
 response.writeHead(200, {'Content-type' : 'text/plain'});

 /*
    Response Body 를 "Hello World"로 설정
 */

 response.end("")
}).listen(8081);
//console.log("Sever running at http://127.0.0.1:8081");

var fs = require("fs");
/*

  Blocking code 

  var data = fs.readFileSync('input.txt');

  console.log(data.toString());
  console.log("Program has ended");

*/

fs.readFile('input.txt', function(err, data) {
  if(err) return console.error(err);
  console.log(data.toString());
});

console.log("Program has ended")


