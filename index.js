const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const app     = express();
var path = require('path');
const imgDir = path.join(__dirname, 'img');
var fs = require('fs');

app.use(express.static(imgDir));


app.set('view engine', 'hbs');
app.set('views', './partials');

var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.json({ type: 'application/*+json' }))
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var jsonParser = bodyParser.json();

let hbs = exphbs.create({
    extname: '.hbs', 
    partialsDir: [
      __dirname + '/partials/pages',
  ]
});
const MILLIS_IN_SECOND = 1000,
    SECONDS_IN_MINUTE = 60,
    MINUTES_IN_HOUR = 60,
    HOURS_IN_DAY = 24,
    DAYS_IN_YEAR = 365,
    MILLISECONDS_IN_YEAR = MILLIS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;
app.use('/dist', express.static('dist', { maxAge: MILLISECONDS_IN_YEAR }));
app.engine('hbs', hbs.engine);
app.set('etag', false);
app.set('views', __dirname + '/partials/pages');
app.get('/', function (req, res) {
    res.render('index',{layout: false})
  })
  app.get('/self', function (req, res) {
    res.render('self',{layout: false})
  })
  app.get('/shared-vehicle', function (req, res) {
    res.render('sharedVehicle',{layout: false})
  })
  app.get('/public-transport', function (req, res) {
    res.render('publicTransport',{layout: false})
  })
  app.get('/map', function (req, res) {
    res.render('map',{layout: false})
  })
  app.get('/end', function (req, res) {
    res.render('end',{layout: false})
  })
  app.get('/tree', function (req, res) {
    res.render('tree',{layout: false})
  })
  app.get('/create-virtual-tree', function (req, res) {
    res.render('virtualTree',{layout: false})
  })
  app.get('/profile', function (req, res) {
    res.render('profile',{layout: false})
  })
  app.get('/report', function (req, res) {
    res.render('report',{layout: false})
  })
  app.get('/sample_data', function (req, res) {
    fs.readFile('sample_data.json', function(err, data) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(data);
      res.end();
    });
  })
  app.post('/sample_data', jsonParser, function (req, res) {
    // console.log(req.body.tanso_data_details);
    fs.writeFile("sample_data.json", req.body.tanso_data_details, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    res.end();
  })
  
console.log('Magic happens on port 3000');
app.listen(3000);