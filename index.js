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

const fs = require('fs');

app.get('/', function(req, res){
  let template = fs.readFileSync(__dirname + '/public/index.html');
  let options = [];

  pool.query('SELECT * FROM artists order by artist_name', (err, results) => {
    console.log(results);

    results.rows.forEach((row) => {
      options.push('<option value="${row.id}">' + row.artist_name + '</option>');
    });

    options = options.join("\n");
    template = template.toString().replace('@@artist_list_1@@', options);

    res.set('Content-Type', 'text/html');
    res.send(template);
  });
});

app.get('/add_artist', function(req, res){
    res.sendFile(__dirname + '/public/add_artist.html');
});

app.get('/add_venue', function(req, res){
    res.sendFile(__dirname + '/public/add_venue.html');
});

app.get('/add_show', function(req, res){
//////////SSSSSSSSTTTTTTUUUUUUCCCCCCKKKKKKKKKKK
});

app.post('/search', function(req, res){
  pool.query('SELECT * FROM shows WHERE artist = 1', (err, res) => {
    console.log(res);
  });
  res.send(res);
});

app.post('/artist_added', function(req, res){
  console.log('Posting!');
  const query = {
    text: 'INSERT INTO artists (artist_name, artist_website) VALUES($1, $2)',
    values: [req.body.artist_name, req.body.artist_website],
  };

  pool.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
  res.send("Complete");
});

app.post('/venue_added', function(req, res){
  console.log('Posting!');
  const query = {
    text: 'INSERT INTO venues (venue_name, venue_website, venue_city, venue_state) VALUES($1, $2, $3, $4)',
    values: [req.body.venue_name, req.body.venue_website, req.body.venue_city, req.body.venue_state],
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
