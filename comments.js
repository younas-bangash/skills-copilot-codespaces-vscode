// Create web server
var express = require('express');
var router = express.Router();
var db = require('../models/db');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Get comment
router.get('/', function(req, res) {
    if (req.session.user) {
        var user = req.session.user;
        var query = 'SELECT * FROM comments';
        db.query(query, function(err, rows, fields) {
            if (err) throw err;
            res.render('comments', {title: 'Comments', rows: rows, user: user});
        });
    } else {
        res.redirect('/login');
    }
});

// Add comment
router.post('/add', urlencodedParser, function(req, res) {
    if (req.session.user) {
        var user = req.session.user;
        var comment = req.body.comment;
        var query = 'INSERT INTO comments (comment) VALUES (?)';
        db.query(query, [comment], function(err, rows, fields) {
            if (err) throw err;
            res.redirect('/comments');
        });
    } else {
        res.redirect('/login');
    }
});

// Edit comment
router.post('/edit/:id', urlencodedParser, function(req, res) {
    if (req.session.user) {
        var user = req.session.user;
        var id = req.params.id;
        var comment = req.body.comment;
        var query = 'UPDATE comments SET comment = ? WHERE id = ?';
        db.query(query, [comment, id], function(err, rows, fields) {
            if (err) throw err;
            res.redirect('/comments');
        });
    } else {
        res.redirect('/login');
    }
});

// Delete comment
router.get('/delete/:id', function(req, res) {
    if (req.session.user) {
        var user = req.session.user;
        var id = req.params.id;
        var query = 'DELETE FROM comments WHERE id = ?';
        db.query(query, [id], function(err, rows, fields) {
            if (err) throw err;
            res.redirect('/comments');
        });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;