'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let lang = req.headers['accept-language'];
  let os = req.headers['user-agent'];
  res.json({
    ipaddress: ip,
    language: lang.split(',')[0],
    software: os.split(')')[0].split('(')[1]
  });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
