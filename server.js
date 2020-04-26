const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/timer-clicker'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/timer-clicker/index.html'));
});

app.listen(process.env.PORT || 8080);
