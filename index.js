const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const { findCSSSelector } = require('./utils/scraper')

const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/css/', (req, res, next) => {
  fs.readFile(`css/${req.query.path}`, (err, data) => {
    if (err) res.send(err);
    else {
      data = data.toString();
      if (req.query.selector) {
        let startIndex = data.indexOf(req.query.selector);
        if (startIndex === -1) {
          res.status(404);
          res.send('not found');
        } else {
          let endIndex = startIndex + data.slice(startIndex).indexOf('}') + 1;
          let response = data.slice(startIndex, endIndex);
          res.send(response);
        }
      } else {
        res.send(data);
      }
    }
  })
});

app.listen(PORT)
