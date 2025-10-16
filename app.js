const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('./app_server/models/medicine');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const dbURI = process.env.MONGO_URI; 
mongoose.connect(dbURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

const apiRouter = require('./app_server/routes/index');
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});