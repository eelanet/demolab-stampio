const Stamp = require('../models/stamp');
const StampCard = require('../models/stamp-card');
const CardTemplate = require('../models/card-template');
const OfficeCardTemplate = require('../models/office-card-template');

const Company = require('../models/company');

const sequelize = require('../dbconnection');


const StampCardController = {

    // Uuden leimapassin luonti käyttäjän ja korttipohjan id:n avulla
    addStampCard: (req, res) => {
        StampCard.findAll()
            .then((stampCards) => {
                let cards = 0;
                stampCards.forEach(() => {
                    cards++;
                });
                cards++;
                StampCard.create(
                    {
                        ID_leimapassi: cards,
                        leimalaskuri: 0,
                        suosikki: 0,
                        ID_korttipohja: req.params.ID_korttipohja,
                        ID_loppukayttaja: req.params.ID_loppukayttaja
                    }
                )
                    .then(() => {
                        res.send('Uuden leimapassin lisäys onnistui. Leimapassin id on ' + cards);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'Some error occurred while retrieving Stampcard.'
                        });
                    });;
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard.'
                });
            })
    },

    // leiman lisäys qr-koodin eli y-tunnuksen perusteella
    // addStampQR: (req, res) => {
    //     Company.findById(req.params.qr_code)
    //         .then(company => {
    //             CardTemplate.findOne({
    //                 where:
    //                 {
    //                     nimi: company.nimi
    //                 }
    //             })
    //                 .then(cardTemplate => {
    //                     StampCard.findOne({
    //                         where:
    //                         {
    //                             ID_korttipohja: cardTemplate.ID_korttipohja,
    //                             ID_loppukayttaja: req.params.ID_user
    //                         }
    //                     })
    //                         .then((stampCard) => {
    //                             let newAmount = stampCard.leimalaskuri + 1;
    //                             stampCard.update({
    //                                 leimalaskuri: newAmount
    //                             });
    //                             Stamp.findAll()
    //                                 .then((data) => {
    //                                     let stampsLength = 0;
    //                                     let date = new Date();
    //                                     let yyyy = date.getFullYear();
    //                                     let mm = date.getMonth() + 1;
    //                                     let dd = date.getDate();
    //                                     data.forEach(() => {
    //                                         stampsLength++;
    //                                     });
    //                                     stampsLength++;
    //                                     Stamp.create({
    //                                         ID_leima: stampsLength,
    //                                         leimapvm: `${yyyy}-${mm}-${dd}`,
    //                                         ID_leimapassi: stampCard.ID_leimapassi
    //                                     })
    //                                         .then(() => {
    //                                             res.send('Leiman lisäys onnistui leimapassiin ' + stampCard.ID_leimapassi);
    //                                         })
    //                                         .catch(err => {
    //                                             res.status(500).send({
    //                                                 message: err.message || 'Some error occurred while retrieving Stampcard.'
    //                                             });
    //                                         });
    //                                 })
    //                                 .catch(err => {
    //                                     res.status(500).send({
    //                                         message: err.message || 'Some error occurred while retrieving Stampcard.'
    //                                     });
    //                                 });
    //                         })
    //                         .catch(err => {
    //                             res.status(500).send({
    //                                 message: err.message || 'Some error occurred while retrieving Stampcard.'
    //                             });
    //                         });
    //                 })
    //                 .catch(err => {
    //                     res.status(500).send({
    //                         message: err.message || 'Some error occurred while retrieving Stampcard.'
    //                     });
    //                 });
    //         })
    //         .catch(err => {
    //             res.status(500).send({
    //                 message: err.message || 'Some error occurred while retrieving Stampcard name.'
    //             });
    //         });
    // },

    // leiman lisäys qr-koodin eli y-tunnuksen perusteella
    addStampQR: (req, res) => {
        StampCard.findOne({
            where: {
                ID_loppukayttaja: req.params.ID_user,
                ID_korttipohja: req.params.qr_code
            }
        })
            .then(stampCard => {
                console.log(stampCard.leimalaskuri)
                let newAmount = stampCard.leimalaskuri + 1;
                stampCard.update({
                    leimalaskuri: newAmount
                });
                Stamp.findAll()
                    .then((data) => {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 1;
                        let dd = date.getDate();
                        let today = `${yyyy}-${mm}-${dd}`;

                        Stamp.create({
                            ID_leima: data.length + 1,
                            leimapvm: today,
                            ID_leimapassi: stampCard.ID_leimapassi
                        })
                            .then(() => {
                                console.log('Leiman lisäys onnistui leimapassiin ' + stampCard.ID_leimapassi + ' käyttäjälle ' + req.params.ID_user);
                                res.send();
                            })
                            .catch(err => {
                                res.status(500).send({
                                    message: err.message || 'Some error occurred while adding Stamp.'
                                });
                            });
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'Some error occurred while retrieving Stampcard.'
                        });
                    });
            });
    },

    // kaikkien leimapassien haku
    findAllStampCards: (req, res) => {
        StampCard.findAll({ where: { ID_loppukayttaja: req.params.id } })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcards.'
                });
            })
    },

    // leimapassin haku id:n avulla
    findOneCard: (req, res) => {
        StampCard.findById(req.params.id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard.'
                });
            })
    },

    // hakee leimapassin leimojen eli leimalaskurin määrän
    stampCardStamps: (req, res) => {
        StampCard.findOne({
            where:
            {
                ID_leimapassi: req.params.ID_stampcard,
                ID_loppukayttaja: req.params.ID_user
            }
        })
            .then(data => res.send(data.leimalaskuri.toString()))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard.'
                });
            })
    },


    getCardTemplate: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Card template.'
                });
            })
    },

    // korttipohjan selitteen haku id:n avulla
    getPrizeText: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.selite))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard prize text.'
                });
            })
    },

    // korttipohjan leimojen määrän haku id:n avulla
    stampsAmount: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.leimamaara.toString()))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard stamps amount.'
                });
            })
    },

    // korttipohjan viimeisen leiman tekstin haku id:n avulla
    lastStampText: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.viimeisen_leiman_teksti))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard last stamp text.'
                });
            })
    },

    // korttipohjan viimeisen leiman tekstin haku id:n avulla
    expireDate: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.voimassaoloaika))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard expire date.'
                });
            })
    },

    // korttipohjan logon haku id:n avulla
    // Haku toimii mutta tulostaa vasta pelkkää tekstiä kuvan sijaan...
    getLogo: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.logo))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard logo.'
                });
            })
    },

    cardName: (req, res) => {
        CardTemplate.findById(req.params.id)
            .then(data => res.send(data.nimi))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard name.'
                });
            })
    },


    // hakee käyttäjän id:n perusteella käyttäjän omat passit sekä kyseisten passien korttipohjat
    getCardInfo: (req, res) => {
        CardTemplate.hasMany(StampCard, { foreignKey: 'ID_korttipohja' })
        StampCard.belongsTo(CardTemplate, { foreignKey: 'ID_korttipohja' })
        StampCard.findAll({
            where: { ID_loppukayttaja: req.params.ID_loppukayttaja },
            include: [{ model: CardTemplate, required: true }]
        })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard name.'
                });
            });
    },

    // hakee leimapassin id:n perusteella leimapassin korttipohjan tiedot
    getStampCardInfo: (req, res) => {
        CardTemplate.hasMany(StampCard, { foreignKey: 'ID_korttipohja' })
        StampCard.belongsTo(CardTemplate, { foreignKey: 'ID_korttipohja' })
        StampCard.findOne({
            where: { ID_leimapassi: req.params.ID_leimapassi },
            include: [{ model: CardTemplate, required: true }]
        })
            .then(data => res.send(data))
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard name.'
                });
            });
    },

    clearStamps: (req, res) => {
        StampCard.findOne({ where: { ID_leimapassi: req.params.ID_leimapassi, ID_loppukayttaja: req.params.ID_user } })
            .then(data => {
                data.update({
                    leimalaskuri: 0
                });
                res.send('Leimat nollattu.');
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving Stampcard name.'
                });
            })
    }

    // let newAmount = data.leimalaskuri + 1;
    // data.update({
    //     leimalaskuri: newAmount
    // });
    // Stamp.findAll()
    //     .then((data) => {


}

module.exports = StampCardController;