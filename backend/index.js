const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Adjust the path as needed
require('dotenv').config();

const app = express();

// Middleware

const corsOptions = {
  origin: process.env.BACKEND_API || 'https://www.dealhound.shop', // Fallback to production frontend URL if CORS_ORIGIN isn't set
};

app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.use('/api', productRoutes);


// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));