var express = require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
var Pool = require('pg').Pool;
var config = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'show_database',
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

pool = new Pool(config);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/add_artist', function(req, res){
    res.sendFile(__dirname + '/public/add_artist.html');
});

/*
app.post('/search', function(req, res){
  console.log('Searching!');

  ///// this is where I got stuck with the search option.

  pool.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
    }
  });
});
*/

app.post('/artist_added', function(req, res){
  console.log('Posting!');
  const query = {
    text: 'INSERT INTO artists (artist_name, artist_website) VALUES($1, $2)',
    values: [req.body.artist_name, req.body.artist_website],
  }
  pool.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
  res.send("Complete");
});

app.listen(3000, function(){
  console.log('Server started on port 3000')
});
