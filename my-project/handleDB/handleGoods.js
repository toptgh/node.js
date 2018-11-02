const Goods = require('../models/Goods');

// 保存商品，新增商品
module.exports.saveGoodsInfo = function(info){
    return new Promise((resolve, reject)=>{
        let goodsInfo = new Goods(info);

        goodsInfo.save().then((result)=>{
            if(result){
                resolve();
            }else{
                reject();
            }
        })
    })
}

// 根据商家查询商品
module.exports.findAllGoodsBySeller = function(sellerid){
    return new Promise((resolve, reject)=>{
        Goods.find({seller: sellerid}).then(result=>{
            resolve(result);
        })
    })
}