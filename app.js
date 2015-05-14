'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;
var media = require('./media.js');

/*
 * Use Handlebars for templating
 */
var exphbs = require('express3-handlebars');
var hbs;

// For gzip compression
app.use(express.compress());

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');

    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
    app.engine('handlebars', exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/views');

    // Locate the assets
    app.use(express.static(__dirname + '/assets'));
}

// Set Handlebars
app.set('view engine', 'handlebars');



/*
 * Routes
 */
// Index Page
app.get('/', function(request, response) {
    response.render('index');
});

app.post('/media/playpause', function(request, response) {
  media.playpause();
  response.status( 200 ).end();
});

app.post('/media/next', function(request, response) {
  media.next();
  response.status( 200 ).end();
});

app.post('/media/previous', function(request, response) {
  media.previous();
  response.status( 200 ).end();
});

app.post('/media/volumeUp', function(request, response) {
  media.volumeUp();
  response.status( 200 ).end();
});

app.post('/media/volumeDown', function(request, response) {
  media.volumeDown();
  response.status( 200 ).end();
});

app.post('/media/volumeMute', function(request, response) {
  media.volumeMute();
  response.status( 200 ).end();
});

/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
