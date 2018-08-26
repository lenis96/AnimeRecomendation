const express=require('express')
const models=require('./../models')
const AnimeController=require('./../controllers/AnimeController')
const anime=express.Router()

anime.get('/',AnimeController.getAnimes)

anime.get('/:id',AnimeController.getAnimeById)

anime.post('/',AnimeController.createAnime)

anime.put('/:id',AnimeController.updateAnime)

anime.delete('/:id',AnimeController.deleteAnime)

module.exports=anime