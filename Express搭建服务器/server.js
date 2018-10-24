const express=require('express');
const fs=require('fs');
const bodyParser=require('body-parser');

//安装express插件流程：新建文件夹，npm init, cnpm i express -S和cnpm i body-parser -S

//使用流程：require引入插件 express()创建服务器 listen启动服务器
//get/post处理客户端请求和处理参数（get接收参数用query，post接收参数需要插件body-parser，直接获取body为undefined）
//end()结束响应

//处理/get/post请求和参数具体流程：
//接收客户端默认根目录请求，响应回去html页面，请求结束。JS发送ajax请求带参数，获取请求参数，响应回去成功，结束。



//创建服务器
const server=express();

//启动服务器
server.listen(8080,'localhost',(error)=>{
    if(!error){
        console.log('服务器启动成功');
    }
    else{
        console.log('服务器开启失败'+error);
    }
})

//处理客户端GET请求 参数一：pathname，参数二：处理请求函数
server.get('/',(request,response)=>{
    fs.readFile('www/index.html',(error,bf)=>{
        if(!error){
            response.write(bf);
            response.end();
        }
    })
})

//接收get请求的参数
server.get('/list',(request,response)=>{
    console.log(request.query);//get请求在URL的参数
    response.write('参数请求成功');//响应回去
    response.end();
})




//处理客户端post请求
server.post('/api/login',(request,response)=>{
    console.log(request.body);//post请求在body 为undefined 需要插件
    response.write('参数请求成功');
    response.end();
})

//接收post请求的参数
server.use(bodyParser.urlencoded());
server.post('/api/v2/login',(request,response)=>{
    console.log(request.body);//post请求在body的参数
})

