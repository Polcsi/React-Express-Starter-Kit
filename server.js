const express = require("express");
require("dotenv");
require("express-async-errors"); // do not need try catch block in controllers
const path = require("path");

const app = express();

//routers
const testRoute = require("./routes/people");

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/people", testRoute);

/* Deployment */
// Create React build folder

/* app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}); */
/* app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); */

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
