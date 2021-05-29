const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const dotenv = require('dotenv');

dotenv.config();
 
// Connect to the DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
     () => console.log('Connected to db!')
);

//Middleware
app.use(express.json());  // to send post requests
//Middleware for routes
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, () => {
    console.log('Server is up and running');
})