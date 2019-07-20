const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const User = sequelize.define('kayttaja', {
    ID_loppukayttaja: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    sahkoposti: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false,
        // estää Sequelizea hakemsta talua monikossa
        freezeTableName: true
    }
);

module.exports = User;