const express = require('express');
const db = require('./config/database');
const router = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(router);

//testing db connection
try {
    db.authenticate();
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});