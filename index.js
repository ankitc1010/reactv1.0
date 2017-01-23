var express = require('express');
var app = express();

app.set('view engine', 'html');
app.get('/', (req,res) => {
  res.send('hello');
})

app.listen('3000', (error,success) => {
  if(!error) {
    console.log("Server started");
  } else {
    console.log(error);
  }
})
