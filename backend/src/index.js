const express = require("express");
const mongoose = require("mongoose");

const app = express();

console.log(process.env.MONGO_URL);
//mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333, () => {
  console.log("listen to por 3333");
});
