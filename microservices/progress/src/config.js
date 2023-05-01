const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `..\\.env.${process.env.ENV}`),
});

module.exports = {
  ENV: process.env.ENV,
  PORT: process.env.PORT
};
