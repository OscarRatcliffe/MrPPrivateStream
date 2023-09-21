var express = require('express');
var app = express();
app.get('/:userVal', function (req, res) {
    res.send({
        "Test": 7,
        "/x": req.params.userVal
    });
});
app.get('/Post/:test', function (req, res) {
    res.send(req.params.test);
});
app.listen(3000, function () {
    console.log("Started server");
});
