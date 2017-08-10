var express = require('express');
var bp = require('body-parser');
var fs = require('fs');

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}); 


app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());




// respond with "hello world" when a GET request is made to the homepage
app.get('/test', function (req, res) {
  res.send('hello world')
})




	function handleHomepageGet(req, res){
		fs.readFile('data/homepage.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}
	function handleSeason1Get(req, res){
		fs.readFile('data/season1.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}
		function handleSeason2Get(req, res){
		fs.readFile('data/season2.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}
		function handleSeason3Get(req, res){
		fs.readFile('data/season3.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}
		function handleSeason4Get(req, res){
		fs.readFile('data/season4.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}
		function handleSeason5Get(req, res){
		fs.readFile('data/season5.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}

app.get('/homepage'  , handleHomepageGet)
app.get('/season1'  , handleSeason1Get)
app.get('/season2'  , handleSeason2Get)
app.get('/season3'  , handleSeason3Get)
app.get('/season4'  , handleSeason4Get)
app.get('/season5'  , handleSeason5Get)

// Start Express server
app.listen(3001, function () {
  
  console.log('Example app listening on port 3000!');
});