const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/comments");

const isLoggedIn = require("../config/auth");

router.post("/cakes/:id/comments", commentsCtrl.create);

module.exports = router;
