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
        models.Anime.findById(req.params.id).then(anime=>{
            anime.name=req.body.name
            anime.img_src=req.body.img_src
            anime.save().then((anime)=>{
                res.json(anime)
            }).catch((err)=>{
                res.json(err)
            })
        }).catch((err)=>{
            res.json(err)
        })
    },

    deleteAnime:(req,res)=>{
        models.Anime.destroy({
            where: {
              id: req.params.id
            }
          }).then((e)=>{
              res.json(e)
          })
    }

}

module.exports=AnimeController