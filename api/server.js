const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const dbURL = "mongodb://127.0.0.1:27017/grouprepo";

app.use("/", res.send("Hello World"));

mongoose.connect(dbURL, () => {
  console.log("Connected to doggos db");
});

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
