'use strict';
const exampleController = require('../controllers/examples');
const express = require('express');
const router = express.Router();

router.post('/', exampleController.createUser);
router.get('/:id', exampleController.getUser);

module.exports = router;
