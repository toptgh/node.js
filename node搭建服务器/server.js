const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');

let server = http.createServer();
server.on('error', (error) => {
    console.log('服务器开启失败');
    console.log(error);
});

server.on('listening', () => {
    console.log('服务器开启成功，开始监听');
})


server.on('request', (request, response) => {
    console.log('接收到了客户端的请求');
    console.log(request.url); //客户端请求路径和参数，不包括哈希值
    let urlObj = url.parse(request.url); //转为对象
    let path = urlObj.pathname; //获取pathname

    if (path === '/home' || path === '/') {
        fs.readFile('www/index.html', (error, data) => {
            if (!error) {
                response.write(data);
                response.end();
            }
        })
    } else if (path.startsWith('/css/')) {
        fs.readFile('www' + path, (error, data) => {
            if (!error) {
                response.write(data);
                response.end();
            }
        })
    } else if (path.startsWith('/images/')) {
        fs.readFile('www' + path, (error, data) => {
            if (!error) {
                response.write(data);
                response.end();
            }
        })
    } else if (path.startsWith('/js/')) {
        fs.readFile('www' + path, (error, data) => {
            if (!error) {
                response.write(data);
                response.end();
            }
        })
    } else if (path.startsWith('/api/')) {
        //这个一个ajax请求
        // 操作数据库
    }
    //解决跨域的问题
    else if (path === '/v4/api/film/now-playing') {
        //向真正有数据的服务器转发这个请求
        let req = https.request({
            hostname: 'm.maizuo.com',
            port: 443,
            path: urlObj.path,
            methods: 'GET'
        }, (res) => {
            res.on('data', (bf) => {
                response.write(bf);
            });
            res.on('end', () => {
                // 得到数据，响应客户端
                response.end();
            })
        });
        req.end();
    }

})

server.listen(8080, 'localhost');