var express = require('express');
var router = express.Router();
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

// scrapes ign website for article title, links, and summary
router.get('/scrape', function (req, res) {
    var url = 'https://techcrunch.com/mobile/';
    axios.get(url).then(function (response) {

        var $ = cheerio.load(response.data);

        $('div .block-content').each(function (i, element) {
            var result = {};
            
            result.title = $(this).children().eq(1).children().text();
            result.link = $(this).children().children().attr('href');
            result.summary = $(this).children().eq(3).text();

            console.log(result);

            db.Article
            .create(result)
            .then(function () {
                res.end();
            })
            .catch(function (error) {
                res.json(error);
            });

        });
    })
});

router.get('/', function (req, res) {
    db.Article
    .find({})
    .then(function(dbArticle) {
        console.log(dbArticle);
        res.render('home', {dbArticle});
    })
    .catch(function(err) {
        res.json(err);
    });
});

module.exports = router;