
const request = require('request')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(port, function(){
    console.log("Up and running")
})


/*
const router = express.Router()
const path = require('path')
const weather = require('/.weather.js')



router.get('/dir/:search?', function(req, res){
    if(condition){
        res.json({
            "element1" : "element1",
            "element2" : "element2"
        })
    }
})

app.use('/', router)



app.get('/', function(req, res) {
    res.sendFile(path.join(_dirname, 'index.html'))
    console.log('home page')
})
*/