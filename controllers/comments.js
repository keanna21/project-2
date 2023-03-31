const CakeModel = require("../models/cake");

module.exports = {
  create,
};



async function create(req, res) {
  try {
    const cake = await CakeModel.findById(req.params.id);
    console.log(cake);
    console.log(req.body);
    req.body.userId = req.user._id;
    cake.comments.push(req.body);
    await cake.save();
    res.redirect(`/cakes/${req.params.id}`);
  } catch (err) {
    console.log("this is comments err");
  }
  
}
