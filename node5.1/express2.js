var express=require("express");
var fs=require("fs")
var app=express();
app.listen(3000);
app.use("/aaa",function(a,b){
//	b.end("abc")
	b.send("<img src='img/a.jpg'/>")
	
	
//	b.end("<img src='img/a.jpg'/>")
})
