const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const Office = sequelize.define('toimipiste', {
    ID_toimipiste: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nimi: {
        type: Sequelize.STRING
    },
    osoite: {
        type: Sequelize.STRING
    },
    postinumero: {
        type: Sequelize.CHAR
    },
    toimipaikka: {
        type: Sequelize.STRING
    },
    puhelinnumero: {
        type: Sequelize.STRING
    },
    sahkoposti: {
        type: Sequelize.STRING
    },
    ytunnus: {
        type: Sequelize.CHAR
    }

},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Office;