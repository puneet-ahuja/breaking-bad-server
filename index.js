var express = require('express');
var bp = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());



// respond with "hello world" when a GET request is made to the homepage
app.get('/test', function (req, res) {
  res.send('hello world')
})



	// initialisation of variables

	// decalre functions
	function handleHomepageGet(req, res){
		fs.readFile('data/homepage.json', function (err,data) {
			res.send(JSON.parse(data));
		});
	}

app.get('/homepage'  , handleHomepageGet)

// start application
app.listen(3001, function () {
  
  console.log('Example app listening on port 3000!');
});