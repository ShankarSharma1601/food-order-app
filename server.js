const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");

//coonfig dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("hello from server");
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // console.log(`server is running on port at ${process.env.NODE_ENV} mode on port no ${process.env.PORT}.`)
});

//npm run server
