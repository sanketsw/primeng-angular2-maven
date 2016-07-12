'use strict';

var express = require('express');
var app = express();
var path = require('path');
var rootPath = path.normalize('./build');
var nodePort = (process.env.VCAP_APP_PORT || 3000);

app.use(express.static(rootPath));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(nodePort);
console.log(new Date() + ' Listening on port: ' + nodePort);
