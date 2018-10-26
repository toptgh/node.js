const mongoose = require('mongoose');

// 创建表格
const schema = new mongoose.Schema({
    //声明表格字段，字段的类型
    name: String,
    age: Number,
    sex: String
});

// 创建操作数据库表格的模型
const Student = mongoose.model('student', schema);



module.exports = function(){
    // 操作数据库的代码：

    // 新增数据
    
    // let studentInfo = new Student({
    //     name: '张三',
    //     age: 10,
    //     sex: '男'
    // });
    // // studentInfo.save().then(()=>{
    // //     console.log('新增完成');
    // // });
    // studentInfo.save((error, info)=>{
    //     console.log('新增完成');
    //     console.log(error);
    //     console.log(info);
    // });
    

    /*-------------------------------------------------------------*/

    // 查询

    // 查询所有
    // Student.find((error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })

    // 查询总数
    // Student.countDocuments((error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })

    // 按条件查找1：
    // Student.where({name: '张三'}).find((error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })

    // Student.where({name: '张三'}).countDocuments((error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })

    // 按照条件查找2:
    // Student.find({name: '张三'}, (error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })

    // 查找一个
    // Student.findOne({name: '张三'})
    // Student.where({name: '张三'}).findOne((error, result)=>{
    //     console.log(error);
    //     console.log(result);
    // })


    // 根据id查询
    // Student.findById('5bd28a2c23366a108071ad91', (error, result)=>{
    //     console.log(error, result);
    // })



    /*-------------------------------------------------------------*/
    // 修改，更新
    
    //修改第一个
    // Student.updateOne({name: '王五'}, {age: 66})
    // Student.findOneAndUpdate({name: '王五'}, {age: 66})
    // Student.update({name: '张三'}, {age: 66}, (error, result)=>{
    //     console.log(error, result);
    // })

    // 修改多个
    // Student.updateMany({name: '张三'}, {sex: '女'}, (error, result)=>{
    //     console.log(error, result);
    // })

    // 根据id修改
    // Student.findByIdAndUpdate('5bd28ad600838d100cea5fe6', {name: "赵六", sex: '男'}, (error, result)=>{
    //     console.log(error, result);
    // })
    



    /*-------------------------------------------------------------*/
    // 删除满足条件的所有数据
    // Student.remove({name: '张三'}, (error, result)=>{
    //     console.log(error, result);
    // })


    // 删除一个
    // Student.findOneAndRemove({name: '王五'}, (error, result)=>{
    //     console.log(error, result);
    // })

    // 根据id删除
    // Student.findByIdAndRemove('5bd28a2c23366a108071ad91', (error, result)=>{
    //     console.log(error, result);
    // })


    // Student.findByIdAndDelete
    // Student.findOneAndDelete
    // Student.deleteMany
    // Student.deleteOne

}