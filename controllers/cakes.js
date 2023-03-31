const CakeModel = require("../models/cake");

module.exports = {
  new: newCake,
  index,
  create,
  show,
  delete: deleteOrder,
  updateOrder,
  edit: editOrder,
};

function newCake(req, res) {
  res.render("cakes/new");
}

function index(req, res) {
  CakeModel.find({})
    .then(function (cakeOrders) {
      console.log(cakeOrders, "<--cake orders");

      res.render("cakes/index", { cakes: cakeOrders });
    })
    .catch(function (err) {
      console.log(err);
      res.send(err);
    });
}

async function create(req, res) {
  console.log(req.body);

  const cake = new CakeModel(req.body);
  cake.userId = req.user._id;

  try {
    await cake.save();
    res.redirect("/cakes");
  } catch (err) {
    console.log(err, "create err");
  }

  
}

function show(req, res) {
  console.log(req.user, "<-- this is req.user");

  CakeModel.findById(req.params.id)
    .then(function (cakes) {
      console.log(cakes.comments);
      res.render("cakes/show", {
        cake: cakes,
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(err);
    });
}

async function deleteOrder(req, res) {
  try {
    await CakeModel.findByIdAndDelete(req.params.id);
    res.redirect("/cakes");
  } catch (err) {
    console.log(err, "this is the delete error");
  }
}

async function updateOrder(req, res) {
  try {
    console.log(req.params);
    console.log(req.body);
    await CakeModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.redirect(`/cakes`);
  } catch (err) {
    console.log(err, "this is the update error");
  }
}
function editOrder(req, res) {
  res.render("cakes/show");
}
