const express= require('express')
const mongoose= require('mongoose')
const route= require('../src/routes/route')

const app= express()

app.use(express.json())

mongoose.set('strictQuery',true)
mongoose.connect("mongodb+srv://TusharJainFunctionup:functionup@tusharjaindb.zxey2fj.mongodb.net/test")
.then(()=> console.log('DB is connected'))
.catch((err)=> console.log(err))

app.use('/',route)

app.listen(3000, function(){
    console.log('server is running on port 3000')
})