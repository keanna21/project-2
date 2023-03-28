var express = require('express');
var router = express.Router();
const cakesCtrl = require('../controllers/cakes');
const isLoggedIn = require('../config/auth')

router.get('/', cakesCtrl.index);
router.get('/new', cakesCtrl.new);

module.exports = router;