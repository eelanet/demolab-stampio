const User = require('../models/user');

const UserController = {

    // käyttäjien haku
    findAll: (req, res) => {
        User.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Users.'
                });
            })
    },




    // yrityksen haku y-tunnuksen avulla
    findOne: (req, res) => {
        User.findById(req.params.id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving User.'
                });
            })
    },

    // käyttäjän luonti
    create: (req, res) => {
        User.create({
            ID_loppukayttaja: '88888',
            sahkoposti: 'm8888@sutdent.jamk.fi'
        })
            .then(() => {
                res.send('Lisäys onnistui');
            });
    }

}

module.exports = UserController;