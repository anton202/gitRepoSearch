const express = require('express');
const app = express();
const bookMarks = require('./bookMarks')
const localPath = '/home/anton/dev/gitRepoSearch/client/gitRepoSearch/dist/gitRepoSearch';

app.use('/',express.static(localPath));
app.use('/bookMarks',bookMarks)

module.exports = app;