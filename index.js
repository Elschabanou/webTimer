const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const db = new sqlite3.Database('./WeTimer.db');


app.get('/', (req, res) =>{

    db.all('SELECT * FROM events', [], (err, rows) => {
        console.error(err);
        console.log(rows);
        res.render('index', {events: rows});
    });

    

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});