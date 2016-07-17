/**
 * Created by 91549_000 on 2016/7/16.
 */
var length = Buffer.byteLength("珠峰培训");
var str = "珠峰培训";
var buffer = new Buffer(str);

console.log(buffer.toString('utf8',3,6));

console.log(length);

var bf1 = new Buffer('珠');
var bf2 = new Buffer('峰');
var bf3 = new Buffer('培');
var bf4 = new Buffer('训');
var str = Buffer.concat([bf1,bf2,bf3,bf4],12);
console.log(str.toString());
