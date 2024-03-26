const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Adjust the path as needed
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.use('/api', productRoutes);


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));