const express = require('express');
const multiparty = require('multiparty');
const seller = require('../../handleDB/handleSeller');
const bodyParser = require('body-parser');
const Cookies = require('cookies');
const goods = require('../../handleDB/handleGoods');


// 创建路由对象
const router = new express.Router();

router.use(bodyParser.urlencoded({extended: false}));

//注册请求处理
router.post('/regiester', (req, res)=>{
    // 获得请求的参数
    let form = new multiparty.Form({
        uploadDir: 'static/images'
    });
    form.parse(req, (error, fields, files)=>{
        let name = fields.name.length>0 ? fields.name[0] : '';
        let password = fields.password.length>0 ? fields.password[0] : '';
        let rePassword = fields.rePassword.length>0 ? fields.rePassword[0] : '';
        
        let logoPath = files.logo.length>0 ? ('/'+files.logo[0].path) : '';
        let bannerPath = files.banner.length>0 ? ('/'+files.banner[0].path) : '';

        // 判断
        // console.log(name, password, rePassword, logoPath, bannerPath);
        if(!name || !password || !rePassword || !logoPath || !bannerPath){
            res.json({
                status: 1,
                message: '输入不能为空'
            })
            return;
        }

        if(password !== rePassword){
            res.json({
                status: 2,
                message: '两次输入密码不一致'
            })
            return;
        }

        // 查询数据库中是否存在这个商家
        seller.canRegiester(name)
        .then(()=>{
             // 不存在，注册
             seller.saveSellerInfo({
                sellername: name,
                password: password,
                logo: logoPath,
                banner: bannerPath
             })
             .then(()=>{
                 res.json({
                     status: 0,
                     message: '注册成功'
                 })
             })
             .catch(()=>{
                 res.json({
                     status: 4,
                     message: '数据库错误，注册失败'
                 })
             })
        })
        .catch(()=>{
            res.json({
                status: 3,
                message: '该商家已存在'
            })
        })

       
    })

    


})

// 登录请求处理
router.post('/login', (req, res)=>{
    // 取得请求参数
    let username = req.body.username;
    let password = req.body.password;

    //判断
    if(!username || !password){
        res.json({
            status: 1,
            message: '输入不能为空'
        })
        return;
    }

    // 查询数据库，这个商家是否存在，密码是否正确
    seller.findSeller(username, password)
    .then(result=>{
        // 保存登录状态，登录成功
        let cookies = new Cookies(req, res);
        cookies.set('SELLERID', result._id);

        res.json({
            status: 0,
            message: '登录成功'
        })

    })
    .catch(()=>{
        res.json({
            status: 2,
            message: '登录失败，用户名或密码错误'
        })
    })
})


// 添加商品
router.post('/add/goods', (req, res)=>{
    // 解析请求的参数
    let form = new multiparty.Form(
        {
            uploadDir: 'static/images'
        }
    );
    form.parse(req, (error, fields, files)=>{
        let name = fields.name.length>0 ? fields.name[0] : '';
        let description = fields.description.length>0 ? fields.description[0] : '';
        let price = fields.price.length>0 ? fields.price[0] : '';

        let images = files.images.map((item)=>{
            return '/'+item.path;
        })
        let id = new Cookies(req, res).get('SELLERID');

        // 保存商品数据
        goods.saveGoodsInfo({
            goodsname: name,
            description: description,
            price: price,
            images: images,
            seller: id
        }).then(()=>{
            res.json({
                status: 0,
                message: '保存成功'
            })
        }).catch(()=>{
            res.json({
                status: 1,
                message: '保存失败'
            })
        })
        
    })
})

module.exports = router;