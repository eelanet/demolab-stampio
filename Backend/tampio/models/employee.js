const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const Employee = sequelize.define('tyontekija', {
    sahkoposti: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    etunimi: {
        type: Sequelize.STRING
    },
    sukunimi: {
        type: Sequelize.STRING
    },
    puhelinnumero: {
        type: Sequelize.STRING
    }
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Employee;