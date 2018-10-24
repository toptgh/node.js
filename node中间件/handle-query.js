const url = require('url');

module.exports = function(req, res, next){
    //对请求统一处理参数
    let queryObj = url.parse(req.url, true).query;//获取参数对象
    res.myQuery = queryObj;//在响应对象新增一个属性，把参数当做值存到响应对象里面
    next();
};