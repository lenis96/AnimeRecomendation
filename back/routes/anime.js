const express=require('express')
const models=require('./../models')
const anime=express.Router()

anime.get('/',(req,res)=>{
    models.Anime.findAll().then((animes)=>{
        res.json(animes)
    })
})

anime.get('/:id',(req,res)=>{
    models.Anime.findById(req.params.id).then(anime=>{
        res.json(anime)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports=anime