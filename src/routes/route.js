const express= require('express')
const router= express.Router()
const controller = require('../controller/controller')

router.get('/test', function(req,res){
    res.send("api is running")
})

router.get('/assets', controller.details)


module.exports= router