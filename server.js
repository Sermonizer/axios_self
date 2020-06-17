/*
 * @Author: your name
 * @Date: 2020-06-17 16:35:29
 * @LastEditTime: 2020-06-17 16:44:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Tx_axios\server.js
 */ 

 const express = require('express')
 const cors = require('cors')

 const app = express()

// 使用cors 允许跨域
app.use(cors())

// 能解析urlencode格式的post请求体参数
app.use(express.urlencoded())

// 能解析json格式的post请求体参数
app.use(express.json())

app.get('/products1', (req, res) => {
    setTimeout(() => {
        res.send([
            {id: 1, name: 'products1.1'},
            {id: 2, name: 'products1.2'},
            {id: 3, name: 'products1.3'},
        ])
    }, 1000 + Math.random() * 2000);
})

app.get('/products2', (req, res) => {
    setTimeout(() => {
        res.send([
            {id: 1, name: 'products2.1'},
            {id: 2, name: 'products2.2'},
            {id: 3, name: 'products2.3'},
        ])
    }, 1000 + Math.random() * 2000);
})

app.listen(4000, () => {
    console.log('serve app start on port 4000');
})
