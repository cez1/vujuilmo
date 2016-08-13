const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://kilke@localhost:27017/ilmokilke', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  
  app.listen(3000, function() {
    console.log('listening on 3000')
  });
  
  app.post('/ilmoittaudu', function(req, res) {
    console.log(req.body);
    db.collection('ilmot').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  	});
  });
});
