const CakeModel = require('../models/cake')

module.exports = {
    new: newCake,
    index,
    create
}

function newCake(req, res){
    res.render('cakes/new')
}



function index(req, res) {


    CakeModel.find({})
    .then(function(allcakes){

    }).catch(function(err){
        console.log(err);
        res.send(err)

    })
    

    
   }



   function create(req, res){

    console.log(req.body);

      CakeModel.create(req.body)
        .then(function(cake){
           
            console.log(cake)
            res.redirect('/cakes');

        }).catch((err) => {
            console.log(err);
            res.send()

        })

   }



   

