const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const EmployeeRole = sequelize.define('tyontekijarooli', {
    ID_tyontekijarooli: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    ID_rooli: {
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

module.exports = EmployeeRole;