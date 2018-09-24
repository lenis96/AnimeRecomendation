var Sequelize = require('sequelize');
// http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html
// initialize database connection
 const sequelize = new Sequelize('mysql://root:@localhost:3306/recomendation_system',{logging:false});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })
// load models
var models = [
  'Anime',
  'Genere'
]
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
})

// describe relationships
// (function(m) {
//   m.PhoneNumber.belongsTo(m.User);
//   m.Task.belongsTo(m.User);
//   m.User.hasMany(m.Task);
//   m.User.hasMany(m.PhoneNumber);
// })(module.exports);

// export connection
module.exports.sequelize = sequelize;