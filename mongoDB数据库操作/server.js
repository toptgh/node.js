const express = require('express');
const mongoose = require('mongoose');
const handleDB = require('./handleDB');


const server = express();



// 启动数据库，执行命令：
// >mongod --dbpath=数据库数据的存放路径 --port=27017
// 连接数据库
mongoose.connect('mongodb://localhost:27018', {useNewUrlParser: true}, (error)=>{
    if(error){
        console.log('连接数据库失败');
    }else{
        console.log('连接数据库成功'); 
        
        // 启动服务器
        server.listen(8080, 'localhost', (error)=>{
            if(error){
                console.log('服务器启动失败');
            }else{
                console.log('服务器启动成功');
                
                // 操作数据库
                handleDB();

            }
        })

    }
})


