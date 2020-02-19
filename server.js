const express = require('express');

//initialize app
const app = express();

app.get('/', (req, res) => res.send('API running'));

//initialize port 
const PORT = process.env.PORT || 5000;

// server running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))