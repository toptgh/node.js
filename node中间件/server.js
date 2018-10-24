const express = require('express');

const handleQuery = require('./handle-query');
const httpMiddleware = require('./http-middleware');

const server = express();


server.use('/api', handleQuery);


server.get('/api/list', (req, res)=>{
    //处理请求的参数，得到page，count
    console.log(res.myQuery);//得到参数对象
})

server.get('/api/goods/detail', (req, res)=>{
    //处理请求的参数,得到商品id
    console.log(res.myQuery);
})

server.get('/api/user/info', (req, res)=>{
    // 处理请求参数，得到用户id
    console.log(res.myQuery);
})

server.get('/', (req, res)=>{
    res.sendFile(__dirname+'/www/index.html');
})

server.use('/v4/api', httpMiddleware);








server.listen(8080, 'localhost', (error)=>{
    if(!error){
        console.log('服务器启动成功');
        console.log('请访问：http://localhost:8080');
    }
    else{
        console.log('服务器启动失败');
        console.log(error);
    }
})