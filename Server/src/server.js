import mongoose from 'mongoose';

const connectDB = async () => {
    const { NODE_ENV, MONGO_URI_PROD, MONGO_URI_DEV } = process.env;
    const MONGO_URI = NODE_ENV === 'production' ? MONGO_URI_PROD : MONGO_URI_DEV;
    console.log(MONGO_URI)
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected to: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
    }
};

export default connectDB;