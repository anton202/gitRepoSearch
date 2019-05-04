const express = require('express');
const app = express();
const bookMarks = require('./bookMarks')
const localPath = '../client/gitRepoSearch/dist/gitRepoSearch';

app.use('/',express.static(localPath));
app.use('/bookMarks',bookMarks)

module.exports = app;