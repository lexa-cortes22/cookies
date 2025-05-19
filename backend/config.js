// config.js
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce'
};