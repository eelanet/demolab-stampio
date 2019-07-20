const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const CardTemplate = sequelize.define('korttipohja', {
    ID_korttipohja: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nimi: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    },
    voimassaoloaika: {
        type: Sequelize.DATE
    },
    viimeisen_leiman_teksti: {
        type: Sequelize.CHAR
    },
    leimamaara: {
        type: Sequelize.INTEGER
    },
    selite: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = CardTemplate;