const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const app     = express();
app.set('view engine', 'hbs');
app.set('views', './partials');

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
  app.get('/pool', function (req, res) {
    res.render('pool',{layout: false})
  })
  app.get('/public', function (req, res) {
    res.render('public',{layout: false})
  })
  app.get('/map', function (req, res) {
    res.render('map',{layout: false})
  })
  app.get('/end', function (req, res) {
    res.render('end',{layout: false})
  })
  app.get('/profile', function (req, res) {
    res.render('profile',{layout: false})
  })
  
console.log('Magic happens on port 3000');
app.listen(3000);