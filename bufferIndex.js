/**
 * Created by 91549_000 on 2016/7/16.
 */
// File System
var fs = require('fs');
try{
   var data = fs.readFileSync('./index.txt1').toString()
    console.log(data);
}
catch(ex){
    console.log(JSON.parse(ex) );
}
console.log();
console.log("OK");