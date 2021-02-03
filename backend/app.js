const express = require("express");
const app = express();
const client = require("./config/db");
const mainRouter = require("./routes");
const errorMiddleware = require("./middleware/error.middleware");
// const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", mainRouter);

app.use("*", (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

module.exports = app;
