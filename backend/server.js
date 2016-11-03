
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var checkIfPalindrome = function(palindrome) {

    var onlyLetterAndNumbers = palindrome.replace(/[^A-Z0-9]/ig, "");
    var reversedWord = onlyLetterAndNumbers.split("").reverse().join("");

    return reversedWord.localeCompare(onlyLetterAndNumbers);
};


app.post('/check_palindrome', urlencodedParser, function (req, res) {
    response = {
        palindrome:req.body.palindrome
    };

    if (checkIfPalindrome(response.palindrome) == 0) {
        res.end("200");
    } else {
        res.end("400");
    }
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});