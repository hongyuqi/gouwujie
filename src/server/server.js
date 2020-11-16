const express = require('express')
const fs = require('fs')
const app = express()

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/multidata.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(8000,function () {
  console.log('server is running')
})
