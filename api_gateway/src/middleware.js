const axios = require("axios");
const config = require("./config");

const cache = (req, res, next) => {
  console.log("Caching...");
  next();
};

const limitRate = (req, res, next) => {
  console.log("Rate limiting...");
  next();
};

const monitor = (req, res, next) => {
  console.log("Monitoring and logging...");
  next();
};

const authenticate = (req, res, next) => {
  console.log("Authenticating");
  next();
};

const authorize = (req, res, next) => {
  console.log("Authorizing...");
  next();
};

const routeMicroservice = async (req, res) => {
  const MICROSERVICE_TO_URL = {
    progress: config.PROGRESS_MICROSERVICE_URL,
  };

  const { microservice } = req.params;
  const endpoint = req.params[0];
  const url = `${MICROSERVICE_TO_URL[microservice]}/${endpoint}`;
  try {
    const { data } = await axios.get(url);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  cache,
  limitRate,
  monitor,
  authenticate,
  authorize,
  routeMicroservice,
};
