//por medio de este archivo se convierten los otros archivos a codigo de produccion

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path= require('path')

module.exports = {
    entry: './src/app/index.js',
    output:{
        path: path.join(__dirname,'resultadoFinal'),
        filename: 'bundle.js'
    },
    devServer:{
        port:3000
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};