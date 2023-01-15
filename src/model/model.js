const mongoose= require('mongoose')

const coinSchema= new mongoose.Schema({
    symbol : String,
    name: String,
    marketCapUsd : String,
    priceUsd: String
},{timestamps: true})

module.exports = mongoose.model('BlockchainProject',coinSchema)