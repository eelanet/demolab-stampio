const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const Role = sequelize.define('rooli', {
    ID_rooli: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nimi: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Role;