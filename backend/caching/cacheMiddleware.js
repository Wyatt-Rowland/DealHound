const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 300, checkperiod: 600 });

const cacheMiddleware = (req, res, next) => {
  const { searchTerm, minSalePercentage } = req.query;
  const key = `${searchTerm}-${minSalePercentage}`;

  const cachedData = myCache.get(key);
  if (cachedData) {
    console.log("Serving from cache");
    return res.json(cachedData);
  }
  next();
};

module.exports = { cacheMiddleware, myCache };