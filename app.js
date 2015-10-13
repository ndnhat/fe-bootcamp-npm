var request = require('superagent');
var cheerio = require('cheerio');

request.get('http://npmjs.com/')
  .end(function(err, res) {
    var $ = cheerio.load(res.text);
    var count = $('#home-stats strong').first().text();
    console.log(count);
  }
);