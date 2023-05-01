const config = require("./config");
const express = require("express");
const middleware = require("./middleware");

const app = express();
const { PORT, ENV } = config;

// Middleware
app.use(middleware.cache);
app.use(middleware.limitRate);
app.use(middleware.monitor);
app.use(middleware.authenticate);
app.use(middleware.authorize);

// Microservice Routing
app.all("/api/:microservice/*", middleware.routeMicroservice);

// Server startup
app.listen(PORT, () => {
  console.log(`ENV=${ENV}`);
  console.log(`server started on port ${PORT}`);
});
