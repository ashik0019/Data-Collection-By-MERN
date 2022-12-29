
import app from './app.js';
import connectDb from './connectDB.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Data Collection server running in ${process.env.NODE_ENV} on port ${PORT}`);
  // database connect after server run
  connectDb();
});