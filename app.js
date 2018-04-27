const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

const getGrades = require('./gradesToJson.js');
const PORT = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());
app.set('views', './');
app.set('view engine', 'mustache');

getGrades( grades => {

    app.get('/', (req, res) => {
        res.render('index', { grades: grades });
    });

    app.listen(PORT, () => {
        console.log('Server running at localhost:' + PORT);
    });
});
