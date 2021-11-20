const express = require('express');
const create = require('./create');
const list = require('./list');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', list);
router.get('/:id', get);

module.exports = router;