const express = require('express');
const post = require('./post');
const list = require('./list');
const get = require('./get');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', post);
router.get('/', list);
router.get('/:id', get);
router.delete('/:id', remove);

module.exports = router;