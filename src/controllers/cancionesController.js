let db = require("../database/models");
//const Op= db.Sequelize.Op;

const cancionesController = {
    list: (req, res) => {
        db.Canciones
            .findAll()
            .then(canciones => {
                return res.json({
                    total: canciones.length,
                    data: canciones
                })
            })

    },

    detail: function (req, res) {
        db.Canciones
            .findByPk(req.params.id)
            .then(cancion => {
                return res.json({
                    data: cancion
                })
            })
    },

    store: function (req, res) {
        db.Canciones
            .create(req.body)
            .then(cancion => {
                return res.json({
                    data: cancion,
                    created: 'ok'
                })
            })
    },

    delete: function (req, res) {
        db.Canciones
            .destroy({
                where: {
                    id: req.params.id
                }
            })
        then(response => {
            return res.json(response)
        })
    },

    edit: function (req, res) {/*
        
        let cancionEdit={
            id:,
            titulo:req.body.titulo,
            duracion:req.body.duracion,
            created_at:,
            updated_at:, 
            genero_id:req.body.genero_id,
            album_id:req.body.album_id,
            artista_id:req.body.artista_id
        }
        
        db.Canciones
        findAll({
            include: ['generos', 'album', 'artista']
        })
        let idCancion = req.params.idCancion;
        res.send(idCancion)*/
    }

}
module.exports = cancionesController;