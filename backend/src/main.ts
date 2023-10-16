const express = require('express')
const app = express();


app.get('/:userVal', (req, res) => {
  res.send({
    "Test": 7,
    "/x": req.params.userVal
  });
});

app.listen(3000, () => {
  console.log("Started server");
});

console.log("Hello World");