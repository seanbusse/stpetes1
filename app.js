const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/about', function(req, res) {
  res.render('about')
});

app.get('/contact', function(req, res) {
  res.render('contact')
});

app.get('/desktop-calendar', function(req, res) {
  res.render('desktop-calendar')
});

app.get('/give', function(req, res) {
  res.render('give')
});

app.get('/lectionary', function(req, res) {
  res.render('lectionary')
});

app.get('/', function(req, res) {
  res.render('home')
});

app.get('/local-churches', function(req, res) {
  res.render('local-churches')
});

app.get('/mobile-calendar', function(req, res) {
  res.render('mobile-calendar')
});

app.get('/Prayer', function(req, res) {
  res.render('prayer')
});

app.get('/privacy', function(req, res) {
  res.render('privacy')
});

app.get('/sermons', function(req, res) {
  res.render('sermons')
});

app.get('/template', function(req, res) {
  res.render('template')
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
