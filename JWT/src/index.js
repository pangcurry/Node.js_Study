const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.get('/api',(req,res) => {
  res.json({
    text: 'hello dupang !!!',
    'dupang': 'shin',
  });
})

app.post('/api/login', (req,res)=> {
  // auth Users
  const user = { id: 34, "dupang" : "shin" };
  const token = jwt.sign({ user: user, "dupang" : "shin" }, 'my_secret_key');
  res.json({
    token: token,
  })
});

app.get('/api/protected', (req,res) => {
  jwt.verify(req.headers["authorization"], 'my_secret_key',(err,data) => {
    if (err) {
      res.status(400).json({ message: "s"});
    }
    else {
      res.json({
        text: 'hahahah',
        data: data,
      })
    }
  });
});

const ensureToken = (req,res,next) => {
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    console.log(bearer);
    req.token = bearerToken;
    next();
  }
  else {
    res.sendStatus(403);
  }
}

app.listen(port, () => {
  console.log('App listening at port 3000!');
});
