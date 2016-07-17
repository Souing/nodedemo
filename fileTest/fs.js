/**
 * Created by 91549_000 on 2016/7/17.
 */
"use strict";
var fs = require('fs');
//fs.readFile('./../index.txt','utf8',function(err,data){
//
//})

//function copy(source,target){
//    fs.readFile(source,function(err,data){
//        fs.writeFile(target,data,function(err){
//            if(err){
//                console.log('error');
//            }
//            else
//            {
//                console.log('ok');
//            }
//        })
//    })
//}
//
//copy('./../2.png','./2.png');

//var obj = {name:'a',age:12};
//Object.keys(obj);
//
//fs.readdir('./fileTest/',function(err,data){
//   console.log(data);
//})

//fs.mkdir('./test',function(err){
//    console.log(err);
//})ss
//createDir('./test/test2/a');
//function createDir(path) {
//    var paths = path.match(/\w+/g);
//    var pathAll = '.';
//    paths.forEach(function (item, index) {
//        pathAll += '/' + item;
//        console.log(pathAll);
//        fs.mkdirSync(pathAll,function(err){
//         //   console.log(err);
//        });
//    })
//}
//fs.readdir('./',function(err,files){
//    files.forEach(function(item){
//        console.log(item);
//        fs.stat(item,function(err,state){
//            console.log(state.isDirectory(),state.isFile(),state.size);
//        })
//    })
//})

fs.exists('./fs.js',function(exist){
    console.log(exist);
})

fs.exists('./../fileTest',function(exist){
    console.log(exist);
})