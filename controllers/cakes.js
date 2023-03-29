const CakeModel = require('../models/cake')

module.exports = {
    new: newCake,
    index,
    create,
    show,
    delete: deleteOrder
    
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

 
   async function deleteOrder(req, res) {
        try{
            await CakeModel.findByIdAndDelete(req.params.id)
            res.redirect('/cakes')

        }catch(err){
            console.log(err, 'this is the delete error')
        }
    // CakeModel.findOne({
        //     'cakes._id': req.params.id,
        //     'cakes.userId': req.user._id,
        // }).then(function(cakeOrders) {
        //     if(!cakeOrders) return res.redirect('/cakes');

        //     cakeOrders.cakes.remove(req.params.id);

        //     cakeOrders.save().then(function(){
        //         res.redirect(`/cakes${cakeOrders._id}`);
        //     })
        // }).catch(err => {
        //     res.send(err)
        // })
    }
 


   

