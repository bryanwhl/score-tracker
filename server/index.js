const express = require('express');
const path = require('path');
const matchesRouter = require('./src/routes/matches.route');
const teamsRouter = require('./src/routes/teams.route');

const app = express();
// urlPath will be appended to the start of every URL path for our backend API
const urlPath = '/api';

app.use(urlPath + '/matches', matchesRouter);

app.use(urlPath + '/teams', teamsRouter);

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../client/build')));

const port = process.env.PORT || 5000;
app.listen(port);
