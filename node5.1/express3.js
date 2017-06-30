var express=require("express") 
var app=express()
app.listen(3000,function(){
	console.log("服务器已启动")
})
//./ 同级
//../ 上级
//端口号尽量在3000以为
//使用 静态资源托管中间件
//app.use(express.static("public")
//);
//app.use(express.static("public",{index:false})
//
//);
app.use(express.static("public",{index:"dama.html"})

);

