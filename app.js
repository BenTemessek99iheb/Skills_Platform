// Import necessary modules
const express = require("express");
const http = require('http');
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import MongoDB connection configuration
const mongoconnection = require("./config/mongoconnection.json");

// Create an Express application
var app = express();

// Create a server with the Express application
const server = http.createServer(app);

// Connect to MongoDB
mongoose.connect(mongoconnection.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "connection error:"));

// Once the connection is open, log a success message
db.once("open", function () {
  console.log("Database connected successfully!!");
});
//define routes
const userRouter = require('./routes/userRouter');


//define models 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter)



// Have the server start listening on port 3030
server.listen(3030, () => console.log("Server is running on port 3030"));

// Export the app module for use in other files
module.exports = app;
