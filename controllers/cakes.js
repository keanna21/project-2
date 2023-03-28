const CakeModel = require('../models/cake')

module.exports = {
    new: newCake,
    index,
}

function newCake(req, res){
    res.render('cakes/new')
}

function index(req, res) {

    CakeModel.find({})

    .then(function(allcakes) {
        console.log(allcakes)
       res.render('cakes/index', {cakes: allcakes})
    }).catch(function(err){
       console.log(err)
    })
   }

   

