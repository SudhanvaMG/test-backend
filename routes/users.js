var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, database) {
  assert.equal(null, err);
  db = database;
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
