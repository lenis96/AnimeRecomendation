module.exports = function (sequelize, Sequelize) {
    return sequelize.define('animes', {
        name: Sequelize.STRING,
        img_src:Sequelize.STRING
    }, {

            timestamps: false
        }
    )
}