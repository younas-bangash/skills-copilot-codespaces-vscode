// create web server

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const COMMENTS_FILE = 'comments.json';

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// GET /api/comments
app.get('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

// POST /api/comments
app.post('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		var comments = JSON.parse(data);}
        var newComment = {
            id: Date.now(),