const Company = require('../models/company');

const companyController = {

    // yritysten haku
    findAll: (req, res) => {
        Company.findAll(
            // järjestää yrityksen nimen ja sitten y-tunnuksen mukaan aakkosjärjestykseen
            // http://docs.sequelizejs.com/manual/querying.html
            {
                order: [['nimi', 'ASC'], ['ytunnus', 'ASC']]
            }
        )
            .then(companies => {
                res.send(companies);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Companies.'
                });
            })
    },

    // yrityksen haku y-tunnuksen avulla
    findOne: (req, res) => {
        Company.findAll({ where: { ytunnus: req.params.ytunnus } })
            .then(company => res.send(company))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Company.'
                });
            })
    },

    // yrityksen luonti
    create: (req, res) => {
        Company.create({
            ytunnus: '2323232-3',
            nimi: 'Jamk',
            yhteyshenkilo: 'Teemu',
            osoite: 'Kauppakatu 3',
            postinumero: '40100',
            toimipaikka: 'Jyvaskyla',
            puhelinnumero: '0100100',
            sahkoposti: 'jamk@mail.com'
        })
            .then(() => {
                res.send('Lisäys onnistui');
            });
    }


}



module.exports = companyController;