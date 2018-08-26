const models=require('./../models')
const GenereController={
    getGeneres:(req,res)=>{
        models.Genere.findAll().then(generes=>{
            res.json(generes)
        }).catch((err)=>{

        })
    },

    getGenereById:(req,res)=>{
        models.Genere.findById(req.params.id).then(genere=>{
            res.json(genere)
        }).catch((err)=>{

        })
    },

    createGenere:(req,res)=>{
        models.Genere.create({name:req.body.name}).then((genereId)=>{
            models.Genere.findById(genereId.id).then((genere)=>{
                res.json(genere)
            })
        })
    },

    updateGenere:(req,res)=>{
        models.Genere.findById(req.params.id).then(genere=>{
            return genere
        }).then((genere)=>{
            genere.name=req.body.name
            genere.img_src=req.body.img_src
            genere.save().then((genere)=>{
                res.json(genere)
            }).catch((err)=>{
                res.json(err)
            })
        }).catch((err)=>{
            res.json(err)
        })
    },

    deleteGenere:(req,res)=>{
        models.Genere.destroy({
            where: {
              id: req.params.id
            }
          }).then((e)=>{
              res.json(e)
          })
    }

}

module.exports=GenereController