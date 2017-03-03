const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

const app = express();
const {PORT} = require('./_server.config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// required to serve files via CORS to karma test server
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://0.0.0.0:9876');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

// logging (dev)
app.use(volleyball)

// find and return css text by path string
// if selector query string is given, find specific selector;
app.get('/css', (req, res, next) => {
  fs.readFile(`css/${req.query.path}`, (err, data) => {
    if (err) {
      res.send(err);
    }
    else {
      data = data.toString();
      if (req.query.selector) {
        let startIndex = data.indexOf(req.query.selector);
        if (startIndex === -1) {
          res.status(404);
          res.send('not found');
        } else {
          let endIndex = startIndex + data.slice(startIndex).indexOf('}') + 1;
          let response = data.slice(startIndex + req.query.selector.length, endIndex);
          res.send(response);
        }
      } else {
        res.send(data);
      }
    }
  })
});

app.listen(PORT)
