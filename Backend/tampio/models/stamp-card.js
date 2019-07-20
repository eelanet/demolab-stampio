const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const StampCard = sequelize.define('leimapassi', {
    ID_leimapassi: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    leimalaskuri: {
        type: Sequelize.INTEGER
    },
    suosikki: {
        type: Sequelize.TINYINT
    },
    ID_loppukayttaja: {
        type: Sequelize.STRING
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

module.exports = StampCard;