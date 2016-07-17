/**
 * Created by 91549_000 on 2016/7/17.
 */
var http  = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var server = http.createServer(function(request,response){
    var url  = request.url;
 console.log(   mime.lookup(url));
    fs.readFile('.' + url, function (err, data) {
        response.setHeader('Content-Type',  mime.lookup(url)+ ';charset=utf-8;')
        response.write(data);
        response.end();
    })

});
server.listen('8080');