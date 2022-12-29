import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
const connectDB = async () => {
    const { NODE_ENV, MONGO_URI_PROD, MONGO_URI_DEV } = process.env;
    const MONGO_URI = 'mongodb+srv://ashiq0019:ashiq0019@cluster0.kbgdshh.mongodb.net/DataCollections?retryWrites=true&w=majority';
    console.log('mongodb url',MONGO_URI)
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected to: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;






