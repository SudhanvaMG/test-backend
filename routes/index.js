var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, database) {
  assert.equal(null, err);
  db = database;
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
