/**
 * Created by 91549_000 on 2016/7/17.
 */
var fs = require('fs');
var path = require('path');
var pa = path.join('../aaa/','/te.txt');
console.log(path.sep);
console.log(__filename);
console.log(__dirname);
console.log(path.basename(pa));

console.log(path.extname(pa));
console.log(path.basename(pa,'.txt'));
console.log(path.resolve())
console.log(path.resolve('./'));
console.log(path.resolve('a','1.txt'));
console.log(path.resolve('a','1.txt','../2.txt'));