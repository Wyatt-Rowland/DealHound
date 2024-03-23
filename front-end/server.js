// Continue working on later
import express from 'express';
import fetch from 'node-fetch';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Route for eBay API search
app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  const url = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(query)}&limit=3`;  const accessToken = process.env.EBAY_TOKEN; // Your eBay API token should be in your .env file

  try {
    const ebayResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        
      },
    });

    if (!ebayResponse.ok) throw new Error(`eBay API request failed: ${ebayResponse.statusText}`);

    const data = await ebayResponse.json();
    console.log(data)

    res.json(data);
  } catch (error) {
    console.error('API request error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));