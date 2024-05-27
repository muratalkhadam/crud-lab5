const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.js');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes.js');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

app.use('/api', postRoutes);

mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
