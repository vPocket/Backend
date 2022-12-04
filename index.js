const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const app = express();

app.use(express.json([]));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(userRoute);

const connection = mongoose
  .connect("mongodb://127.0.0.1/vpocket", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

app.listen(8081, async function () {
  console.log("server running on port 8081");
});
