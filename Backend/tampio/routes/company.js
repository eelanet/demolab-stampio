const express = require('express');
const router = express.Router();

const CompanyController = require('../controllers/CompanyController');

// GET kutsut
router.get('/findone/:ytunnus', CompanyController.findOne);
router.get('/findall', CompanyController.findAll);


// PUT kutsut


// POST kutsut
router.post('/create', CompanyController.create);


// DELETE kutsut


module.exports = router;