const express = require('express');
const connectDB = require('./config/db');

//initialize app
const app = express();

// Connecting the database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Defining routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


//initialize port 
const PORT = process.env.PORT || 5000;

// server running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))