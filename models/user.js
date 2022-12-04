const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  _id: ObjectId,
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
  goal: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
