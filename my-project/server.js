const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const buyerApiRouter = require('./routers/buyer/apiRouter');
const buyerMainRouter = require('./routers/buyer/mainRouter');

const sellerApiRouter = require('./routers/seller/apiRouter');
const sellerMainRouter = require('./routers/seller/mainRouter');

// 创建服务器
const server = express();

// 静态资源
server.use('/public', express.static('./static'));
server.use('/static', express.static('./static'));


// ajax
// 处理买家ajax请求
server.use('/api', buyerApiRouter);
// 处理卖家ajax请求
server.use('/seller/api', sellerApiRouter);


// 配置模板引擎
server.set('view engine', 'html');
server.engine('html', ejs.__express);

// 页面
// 处理卖家页面请求
server.use('/seller', sellerMainRouter);
// 处理买家页面请求
server.use('/', buyerMainRouter);






// 连接数据库
new Promise((resolve, reject)=>{
    mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, dbName: 'test'}, (error)=>{
        if(error){
            console.log('数据库连接失败');
        }
        else{
            console.log('数据库连接成功');
            resolve();
        }
    })
})
//启动服务器
.then(()=>{
    server.listen(8080, 'localhost', (error)=>{
        if(error){
            console.log('服务器启动失败');
        }else{
            console.log('服务器启动成功');
        }
    })
})

