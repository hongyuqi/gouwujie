const express = require('express')
const fs = require('fs')
const app = express()

//解决跨域问题。设置允许跨域的域名，*代表都允许
app.all('*',function(req,res,next){
  //允许的header类型
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','content-type')
  //跨域请求方式
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
  if(req.method.toLowerCase()=='options')
    res.send(200)
  else
    next()
})

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/multidata.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/homedata',function (req,res) {
  fs.readFile('./data/homedata.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/categorydata',function (req,res) {
  fs.readFile('./data/category.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategorydata582',function (req,res) {
  fs.readFile('./data/subcategory582.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategorydata595',function (req,res) {
  fs.readFile('./data/subcategory595.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategorydata596',function (req,res) {
  fs.readFile('./data/subcategory596.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategorydata598',function (req,res) {
  fs.readFile('./data/subcategory598.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/category/subcategorydata3627',function (req,res) {
  fs.readFile('./data/subcategory3627.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop1',function (req,res) {
  fs.readFile('./data/pop1.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop2',function (req,res) {
  fs.readFile('./data/pop2.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop3',function (req,res) {
  fs.readFile('./data/pop3.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop4',function (req,res) {
  fs.readFile('./data/pop4.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop5',function (req,res) {
  fs.readFile('./data/pop5.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/detail/pop6',function (req,res) {
  fs.readFile('./data/pop6.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(8000,function () {
  console.log('server is running')
})
