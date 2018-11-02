// 定义webpack的编译方式
const path = require('path');


// 向外提供一个对象，这个对象中声明webpack的编译方式
module.exports = {
    /*
    mode: //编译模式
    entry: //编译代码的入口文件
    output: //编译代码后的输出文件
    module: //使用的模块
    loaders
    plugins:
    .....
    */





   //编译模式
   mode: 'development',//development / production  /none
    
//    入口文件（string(一个入口文件) | object（多个入口文件））
    // entry: './src/main.js',
    entry: {
        app: './src/main.js',
        plugins: './src/plugin.js'
    },

//    输入文件 object
    output: {
        // path: __dirname+'/dist',//编译好后的文件输出的路径,按系统路径写
        path: path.resolve(__dirname),
        // filename: 'app.js'//(一个文件的输出方式)
        // filename: '[name]_[hash:16].js'
        filename: 'dist/[name].js'
    },


    // 定义使用的module
    module: {
        // 定义使用的loaders
        rules: [
            {
                test: /\.css$/,//处理css结尾的模块
                //使用什么工具编译，在use中定义
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.(jpg|png|jpeg|gif|ttf|svg)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//出去这个文件夹中的文件不处理
                use: {
                    loader: 'babel-loader',
                    options: {
                        // plugins: [],
                        presets: ['@babel/preset-env']
                    }
                }
                
            }
        ]
    }


    


}

