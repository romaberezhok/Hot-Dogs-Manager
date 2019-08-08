const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const hotDogsRoute = require('./routes/hotDogs');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', hotDogsRoute);

app.get('/', (req, res) => {
    res.send('Use /api to connect to api');
})

mongoose.connect('mongodb://localhost:27017/hotdogs', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));