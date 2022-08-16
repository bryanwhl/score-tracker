const express = require('express');
const path = require('path');

const app = express();
// urlPath will be appended to the start of every URL path for our backend API
const urlPath = '/api';

app.get(urlPath + '/matches', (req, res) => {
  const returnJson = {
    text: "Hello World",
  }
  res.json(returnJson);
})

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || 5000;
app.listen(port);
