var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send({
        "Test": 7
    });
});
app.listen(3000, function () {
    console.log("Started server");
});
