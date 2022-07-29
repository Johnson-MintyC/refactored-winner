const express = require("express");

const app = express();
const PORT = 3000;
const dbURL = "mongodb://127.0.0.1:27017/grouprepo";

app.use("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
