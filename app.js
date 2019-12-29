require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers/router');
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;
mongoose.set('useUnifiedTopology', true);

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors());
app.use(bodyParser.json())
app.use('/', router)
const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server running on port ${port}`);
