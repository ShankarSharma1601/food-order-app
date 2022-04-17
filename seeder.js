const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const Pizza = require('./models/pizzaModel')
const Pizzas = require('./data/pizza-data')

//config env and mongodb conn file
dotenv.config()
connectDb()

//import data
const importData = async () => {
    try{
        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampleData)
        console.log(`Data IMPORTED`)
        process.exit()
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}

const dataDestroy = () => {}


if(process.argv[2] === "-d" ){
    dataDestroy()
}else{
    importData()
}