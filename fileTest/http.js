/**
 * Created by 91549_000 on 2016/7/17.
 */
//curl -v http://127.0.0.1:8080/

var http = require('http');
var server = http.createServer(function(request,response){
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(new Date().toLocaleString());
    response.write(new Date().toString());
    setTimeout(function(){
        response.write(new Date().toLocaleString());
       // response.end();
    },10000);
   // response.end();
    //response.write('word2');

});
server.listen('8080');