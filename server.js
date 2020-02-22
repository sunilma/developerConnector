const express = require('express');
const connectDB = require('./config/db');

// for production usage
const path =require('path');

//initialize app
const app = express();

// Connecting the database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));


//Defining routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


// Serve static assets in production
if(process.env.NODE_ENV === 'production' ) {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//initialize port 
const PORT = process.env.PORT || 5000;

// server running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))