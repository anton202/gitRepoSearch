const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({ origin: true }))
app.use(session({secret: "Shh, its a secret!"}));
app.use(bodyParser.json())
app.use(routes)


app.listen(8080,console.log('server is listening on port 8080'))