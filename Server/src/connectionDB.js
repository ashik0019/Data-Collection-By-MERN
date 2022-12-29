import app from './app';
import connectDb from './connectDB';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Library server running in ${process.env.NODE_ENV} on port ${PORT}`);
  // database connect after server run
  connectDb();
});