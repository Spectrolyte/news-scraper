var express = require("express");
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");
var router = require('./controllers/htmlRoutes.js');

var PORT = 3000;

// Initialize Express
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(router);

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/news-scraper", {
  useMongoClient: true
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});