const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userControllers.js');

router.get('/', getAllUsers)

module.exports = router;