const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, './../public');
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(publicPath));

app.listen(port, () => {
    console.log(`Server started up at ${port}`);
});

module.exports = {app};