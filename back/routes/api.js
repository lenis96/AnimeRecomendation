const express=require('express')
const api=express.Router() 
const anime=require('./anime')
const genere=require('./genere')

api.use('/anime',anime)
api.use('/genere',genere)

api.get('/',(req,res)=>{
    res.send('api')
})


module.exports=api