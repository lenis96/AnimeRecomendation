const express=require('express')
const api=express.Router() 
const anime=require('./anime')

api.use('/anime',anime)

api.get('/',(req,res)=>{
    res.send('api')
})


module.exports=api