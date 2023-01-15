const  axios = require("axios")
const coinModel= require('../model/model')

const details= async function(req,res){
    try{
    let data = await axios.get('https://api.coincap.io/v2/assets')
    let selectData= data.data
    let checkData= await coinModel.find()
    let savedDetails={}
    if(checkData.length===0){
        let a= []
        for(let i=0; i<selectData.data.length; i++){
            savedDetails={
              symbol: selectData.data[i].symbol,
              name: selectData.data[i].name,
              marketCapUsd: selectData.data[i].marketCapUsd,
              priceUsd: selectData.data[i].priceUsd
        }
        let createData = await coinModel.create(savedDetails)
        a.push(savedDetails)
    }
    return res.status(201).send({status:true, data:"created successfully"})
    }
    else{
        let getDetails = await coinModel.find().lean()
        for(let i=0; i<getDetails.length; i++){
            getDetails[i].changePercent24Hr= selectData.data[i].changePercent24Hr
        }
        
        for(let i=0; i<getDetails.length; i++){
            getDetails.sort((a,b)=>Number(b.changePercent24Hr)-Number(a.changePercent24Hr))
        }
        return res.status(200).send({status: true, data: getDetails})
    }
    }
catch(error){
    return res.status(500).send({status: false, error: error.message})
}
    }
module.exports.details= details