const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');

app.use(session({secret: "Shh, its a secret!"}));

app.use(routes)


app.listen(8080,console.log('server is listening on port 8080'))