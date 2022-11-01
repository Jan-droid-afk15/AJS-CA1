const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
require('dotenv').config();

require('./utils/db.js')();

app.use(express.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    // split will split the bearer and token and place it into an array
    // will run on every request
    //if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        if (req.headers?.authorization?.split(' ')[0] === 'Bearer') {
            jwt.verify(req.headers.authorization.split(' ')[1], process.env.APP_KEY, (err, decoded) => {
                if (err) req.user = undefined;
    
                req.user = decoded;
                next();
            });
        }
        else {
            req.user = undefined;
            next();
        }
    });
    
    // checks to see if the user is valid
    app.use((req, res, next) => {
        console.log("USER: ")
        console.log(req.user);
        next();
    });
    

app.use((req, res, next) => {
    console.log("Time: ", Date.now());
    res.setHeader('test', "Hello World");
    next();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/internets', require('./routes/internets'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});