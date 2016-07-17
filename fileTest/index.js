/**
 * Created by 91549_000 on 2016/7/17.
 */
var http  = require('http');
var http1  = require('http');
console.log(http==http1)
var fs = require('fs');
var path = require('path');
console.log(path.resolve('a'));
var server = http.createServer(function(request,response){
    var url  = request.url;
//    console.log(url);
//console.log(path.resolve('./',url.substr(1)));
    if(url==='/index.html') {
        fs.readFile('index.html', function (err, data) {

            response.setHeader('Content-Type', 'text/html;charset=utf-8;')
            response.write(data);
            response.end();
        })
    }
    else if(url==='/index.css') {
        fs.readFile('index.css', function (err, data) {

            response.setHeader('Content-Type', 'text/css;charset=utf-8;')
            response.write(data);
            response.end();
        })
    }
});
server.listen('8080');