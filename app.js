const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const proxy = require('express-http-proxy');
const allowed = [
    '.js',
    '.css',
    '.png',
    '.jpg'
  ];
app.use('/api', proxy('https://survey-dev.cfapps.io'));
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
