const config = require("./config");
const express = require('express')
const app = express()

app.use((req, res) => {
  console.log('hi')
  res.send("progress")
})

console.log(`ENV=${config.ENV}`);
app.listen(config.PORT, () => {
  console.log(`server started on port ${config.PORT}`);
})