
const http=require('http');
const https=require('https');
const fs=require('fs');
const options={
    hostname:'www.cnblogs.com',
    path:'/aggsite/UserStats',
    port:443,
    methods:'GET'
}

let request=https.request(options,(response)=>{
    console.log('请求得到响应');
    let result='';
    response.on('data',(buffle)=>{
       result+=buffle;
    });
    response.on('end',()=>{
        console.log('请求完成');
        console.log(result);
        fs.writeFile('a.txt', result,(error)=>{
            console.log(error);
        });
    })
})

request.on('error',(error)=>{
    console.log(error);
    console.log('请求失败');
})

request.end();