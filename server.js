const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const port = process.env.port || 8080
const host = process.env.BASE_URL || 'http://localhost:8080';
const apiRoute = require('./routes/apiRoute')


mongoose.connect(
  "mongodb://127.0.0.1:27017/MEANstack",
  { useNewUrlParser: true },
  err => {
    if (err) throw err.message;
    console.log('mongodb connection successfull')
  },
)






app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoute)

app.listen(port, () => console.log(`listing at ${host}`))
