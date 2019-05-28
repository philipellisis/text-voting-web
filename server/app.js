const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const proxy = require('express-http-proxy');

var auth = process.env.AUTH;
var surveyUrl = process.env.SURVEY_URL;
const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.map'
  ];

app.use('/api', (req, res, next) => {
    req.headers['Authorization'] = auth;
    next();
});
app.use('/api', proxy(surveyUrl));
app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`dist/survey-dashboard/${req.url}`));
    } else {
        res.sendFile(path.join(__dirname, 'dist/survey-dashboard/index.html'));
    }
});

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));
