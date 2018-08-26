const express=require('express')
const models=require('./../models')
const GenereController=require('./../controllers/GenereController')
const genere=express.Router()

genere.get('/',GenereController.getGeneres)

genere.get('/:id',GenereController.getGenereById)

genere.post('/',GenereController.createGenere)

genere.put('/:id',GenereController.updateGenere)

genere.delete('/:id',GenereController.deleteGenere)

module.exports=genere