const express = require("express");


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send(`{title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'})`
})


module.exports = app;