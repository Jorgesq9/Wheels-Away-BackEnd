// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");


const { isAuthenticated } = require("./middleware/jwt.middleware");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

//auth routes
const authRoutes = require("./routes/auth.routes")
app.use("/api/auth", authRoutes)

//user routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", isAuthenticated, userRoutes );

//cars routes
const carsRoutes = require("./routes/car.routes");
app.use("/api/cars", carsRoutes );

//rentals routes
const rentalsRoutes = require("./routes/rental.routes");
app.use("/api/rentals", rentalsRoutes );

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
