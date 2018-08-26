module.exports = function (sequelize, Sequelize) {
    return sequelize.define('generes', {
        name: Sequelize.STRING,
    }, {

            timestamps: false
        }
    )
}