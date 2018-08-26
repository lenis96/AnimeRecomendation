const models=require('./../models')
const AnimeController={
    getAnimes:(req,res)=>{
        models.Anime.findAll().then(animes=>{
            res.json(animes)
        }).catch((err)=>{

        })
    },

    getAnimeById:(req,res)=>{
        models.Anime.findById(req.params.id).then(anime=>{
            res.json(anime)
        }).catch((err)=>{

        })
    },

    createAnime:(req,res)=>{
        models.Anime.create({name:req.body.name,img_src:req.body.img_src}).then((animeId)=>{
            models.Anime.findById(animeId.id).then((anime)=>{
                res.json(anime)
            })
        })
    },

    updateAnime:(req,res)=>{
        res.json(req.body)
    },

    deleteAnime:(req,res)=>{
        res.json({message:'anime deleted'})
    }

}

module.exports=AnimeController