const express = require('express');
const httpProxyMiddleware = require('http-proxy-middleware');


const server = express();



server.get('/', (req, res)=>{
    res.sendFile(__dirname+'/www/index.html');

})


//使用第三方中间件完成正向代理
server.use('/v4', httpProxyMiddleware({
    target: 'https://m.maizuo.com',//这个请求需要转发到哪个服务器上。
    changeOrigin: true//是否需要修改域名
}));

server.use('/restapi', httpProxyMiddleware({
    target: 'https://h5.ele.me',//这个请求需要转发到哪个服务器上。
    changeOrigin: true//是否需要修改域名
}));




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
