const config = require("./config");
const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("hi");
  res.send("progress");
});

app.listen(config.PORT, () => {
  console.log(`ENV=${config.ENV}, PORT=${config.PORT}`);
});
