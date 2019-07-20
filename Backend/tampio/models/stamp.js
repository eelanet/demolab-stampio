const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const Stamp = sequelize.define('leima', {
    ID_leima: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    leimapvm: {
        type: Sequelize.STRING
    },
    ID_leimapassi: {
        type: Sequelize.INTEGER
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Stamp;