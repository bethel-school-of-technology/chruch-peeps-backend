const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://ChurchPeeps:Church123@cluster0-slnre.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'));

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const PrayerRouter = require('./routes/prayer');
const usersRouter = require('./routes/users');



app.use('/prayer', PrayerRouter);
app.use('/users', usersRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Server is running on port: ${PORT}`));