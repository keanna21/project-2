const CakeModel = require('../models/cake')

module.exports = {
    new: newCake,
    index,
    create,
    show
    
}

function newCake(req, res){
    res.render('cakes/new')
}



function index(req, res) {


    CakeModel.find({})
    .then(function(cakeOrders){
       
       console.log(cakeOrders, '<--cake orders')
       
        res.render('cakes/index',{cakes: cakeOrders})
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


 function show(req, res) {
    console.log(req.user, '<-- this is req.user')

    CakeModel.findById(req.params.id)
       .then(function(cakes) {
        console.log(cakes)
        res.render('cakes/show', {
            cake: cakes
        })
       }).catch((err) =>{
        console.log(err);
        res.render(err)
       })
 }



   

