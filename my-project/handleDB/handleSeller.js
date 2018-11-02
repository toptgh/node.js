const Seller = require('../models/Seller');


// 判断商家是否存在，是否可以注册
module.exports.canRegiester = function(name){

    return new Promise((resolve, reject)=>{
        Seller.findOne({sellername: name}).then(result=>{
            if(result){
                // 存在商家，不能注册
                reject();
            }else{
                // 不存在，可以注册
                resolve();
    
            }
        })
    })
    
}


// 保存商家信息，注册
module.exports.saveSellerInfo = function(info){
    return new Promise((resolve, reject)=>{
        let sellerInfo = new Seller(info);
        sellerInfo.save().then(result=>{
            if(result){
                resolve();//注册成功
            }else{
                reject();//注册失败
            }
        })
    })
}


// 查询商家是否存在，并密码正确
module.exports.findSeller = function(name, psd){
    return new Promise((resolve, reject)=>{
        Seller.findOne({sellername: name, password: psd}).then(result=>{
            if(result){
                //正确
                resolve(result);
            }else{
                //不存在
                reject();
            }
        })
    })
}

module.exports.findSellerById = function(id){
    return new Promise((resolve, reject)=>{
        Seller.findById(id).then(result=>{
            if(result){
                //id有效，登录了
                resolve();
            }else{
                //没有登录
                reject();
            }
        })
    })
}