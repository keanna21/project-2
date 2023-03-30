const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    content: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: String,
  },
  { timestamps: true }
);

const cakeSchema = new mongoose.Schema({
  flavor: {
    type: String,
    requred: true,
  },
  occasion: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  comments: [commentsSchema],
});

module.exports = mongoose.model("Cake", cakeSchema);
