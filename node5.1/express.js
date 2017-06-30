//概念：
//浏览器的请求进入服务器之后
//服务器的响应离开服务器之前
//这段过程中的处理函数
//中间件 可以访问请求对象和响应对象的一个函数

//express上处理

/*使用
 
 * 下载express
 * 加载express
 * 初始化一个express的入口函数
 * 设置端口号
 * 编写具体的处理逻辑
 * */

//加载express
//var express=require("express");
////初始化入口函数
//var app=express();
////设置端口号
//app.listen(3000);
////app.use()加载中间件的方法
//app.use(function(req,res){
//	res.end("hello word")
//})


//send 发送各种类型的响应




var express=require("express")
var app.express();
app.listen(3000,function(){
	console.log("服务器启用")
	console.log("localhost:3000")
});
app.use(function(a,b){

		b.end("hello word")
});