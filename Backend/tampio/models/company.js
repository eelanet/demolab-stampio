const sequelize = require('../dbconnection');
const Sequelize = require('sequelize');

const Company = sequelize.define('yritys', {
  ytunnus: {
    type: Sequelize.CHAR,
    primaryKey: true
  },
  nimi: {
    type: Sequelize.STRING
  },
  yhteyshenkilo: {
    type: Sequelize.STRING
  },
  osoite: {
    type: Sequelize.STRING
  },
  postinumero: {
    type: Sequelize.STRING
  },
  toimipaikka: {
    type: Sequelize.STRING
  },
  puhelinnumero: {
    type: Sequelize.STRING
  },
  sahkoposti: {
    type: Sequelize.STRING
  }
},
  {
    timestamps: false,
    freezeTableName: true
  }
);


module.exports = Company;