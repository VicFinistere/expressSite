// create an express app
const express = require("express")
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/my_db')
// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));