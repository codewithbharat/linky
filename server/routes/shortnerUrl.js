const express = require('express');
const router = express.Router();

const { shorten, redirect } = require('../controllers/shortnerUrl.js');

router.post('/shorten', shorten);
router.get('/:hash', redirect);

module.exports = router;
