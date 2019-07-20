const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const OfficeCardTemplate = sequelize.define('toimipistekorttipohja', {
    ID_toimipistekorttipohja: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    ID_toimpiste: {
        type: Sequelize.INTEGER
    },
    ID_korttipohja: {
        type: Sequelize.INTEGER
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = OfficeCardTemplate;