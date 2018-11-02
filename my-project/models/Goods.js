const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    goodsname: String,
    description: String,
    price: Number,
    images: Array,
    count: Number,
    seller: {//商品表格需要关联商家表格
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'seller'
    }
});

module.exports = mongoose.model('goods', schema);