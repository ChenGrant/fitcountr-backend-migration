const config = require("./config");
const express = require("express");
const middleware = require("./middleware");

const app = express();

// Middleware
app.use(
  middleware.cache,
  middleware.limitRate,
  middleware.monitor,
  middleware.authenticate,
  middleware.authorize
);

app.all("/api/:microservice/*", middleware.routeMicroservice);

// Server startup
app.listen(config.PORT, () =>
  console.log(`ENV=${config.ENV}, PORT=${config.PORT}`)
);
