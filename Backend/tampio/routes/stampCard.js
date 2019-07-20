const express = require('express');
const router = express.Router();

const StampCardController = require('../controllers/StampCardController');

// GET kutsut
router.get('/findall-stampcards/:id', StampCardController.findAllStampCards);
router.get('/findone-stampcard/:id', StampCardController.findOneCard);
router.get('/stampcard-stamps/:ID_stampcard/:ID_user', StampCardController.stampCardStamps);

router.get('/cards-info/:ID_loppukayttaja', StampCardController.getCardInfo);
router.get('/stampcard-info/:ID_leimapassi', StampCardController.getStampCardInfo);


router.get('/template/:id', StampCardController.getCardTemplate);
router.get('/prizetext/:id', StampCardController.getPrizeText);
router.get('/stampsamount/:id', StampCardController.stampsAmount);
router.get('/laststamp/:id', StampCardController.lastStampText);
router.get('/expiredate/:id', StampCardController.expireDate);
router.get('/logo/:id', StampCardController.getLogo);
router.get('/name/:id', StampCardController.cardName);


// PUT kutsut
router.put('/addstamp-qr/:qr_code/:ID_user', StampCardController.addStampQR);

router.put('/clearstamps/:ID_leimapassi/:ID_user', StampCardController.clearStamps);


// POST kutsut
router.post('/add-stampcard/:ID_korttipohja/:ID_loppukayttaja', StampCardController.addStampCard);


// DELETE kutsut


module.exports = router;