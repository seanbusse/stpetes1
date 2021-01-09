const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');
const year = date.getYear();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res) {
  res.render('home', {copyrightYear: year})
});

app.get('/about', function(req, res) {
  res.render('about', {copyrightYear: year})
});

app.get('/contact', function(req, res) {
  res.render('contact', {copyrightYear: year})
});

app.get('/desktop-calendar', function(req, res) {
  res.render('desktop-calendar', {copyrightYear: year})
});

app.get('/give', function(req, res) {
  res.render('give', {copyrightYear: year})
});

app.get('/lectionary', function(req, res) {
  res.render('lectionary', {copyrightYear: year})
});

app.get('/', function(req, res) {
  res.render('home', {copyrightYear: year})
});

app.get('/local-churches', function(req, res) {
  res.render('local-churches', {copyrightYear: year})
});

app.get('/mobile-calendar', function(req, res) {
  res.render('mobile-calendar', {copyrightYear: year})
});

app.get('/Prayer', function(req, res) {
  res.render('prayer', {copyrightYear: year})
});

app.get('/', function(req, res) {
  res.render('home', {copyrightYear: year})
});

app.get('/privacy', function(req, res) {
  res.render('privacy', {copyrightYear: year})
});

app.get('/sermons', function(req, res) {
  res.render('sermons', {copyrightYear: year})
});

app.get('/template', function(req, res) {
  res.render('template', {copyrightYear: year})
});



app.listen(3000, function() {
  console.log('Server started on port 3000');
});
