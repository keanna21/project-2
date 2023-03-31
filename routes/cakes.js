const express = require('express');
const router = express.Router();
const cakesCtrl = require('../controllers/cakes');

const isLoggedIn = require('../config/auth')

router.get('/', cakesCtrl.index);
router.get('/new', cakesCtrl.new);
router.get('/:id', cakesCtrl.show);
router.get('/:id/edit', isLoggedIn, cakesCtrl.edit)
router.post('/', isLoggedIn, cakesCtrl.create);
router.put('/:id/edit', cakesCtrl.updateOrder)
router.delete('/:id', cakesCtrl.delete);


module.exports = router;