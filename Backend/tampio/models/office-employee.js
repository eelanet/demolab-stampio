const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const OfficeEmployee = sequelize.define('toimipistetyontekija', {
    ID_toimipistetyontekija: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ID_toimpiste: {
        type: Sequelize.INTEGER
    },
    ID_tyontekija: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = OfficeEmployee;