const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// GET kutsut
router.get('/findone/:id', UserController.findOne);
router.get('/findall', UserController.findAll);

// PUT kutsut


// POST kutsut
router.post('/create', UserController.create);


// DELETE kutsut


module.exports = router;