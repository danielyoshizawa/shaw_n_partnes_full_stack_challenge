
var express = Require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/check_palindrome', urlencodedParser, function (req, res) {
    response = {
        palindrome:req.body.palindrome
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});