const https = require('https');

module.exports = (req, res, next)=>{
    let request = https.request({
        hostname: 'm.maizuo.com',
        port: 443,
        path: '/v4/api'+req.url,
        methods: 'GET'
    }, (response)=>{
        let result = '';
        response.on('data', (bf)=>{
            result += bf;
        })
        response.on('end', ()=>{
            res.json(JSON.parse(result));
        })
    });
    request.end();
};