'use strict';

// var express = require('express');

// const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
var routes = require('index');
var server = app.listen(app.get('PORT'), function (){
  console.log('app started');
});
// var routes = require('')
// const conString = '';
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => {
//   console.error(err);
// });

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static('./public'));

