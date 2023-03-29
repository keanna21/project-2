var express = require('express');
var router = express.Router();
const cakesCtrl = require('../controllers/cakes');
const isLoggedIn = require('../config/auth')

router.get('/', cakesCtrl.index);
router.get('/new', cakesCtrl.new);
router.get('/:id', cakesCtrl.show);
router.post('/', isLoggedIn, cakesCtrl.create);

module.exports = router;