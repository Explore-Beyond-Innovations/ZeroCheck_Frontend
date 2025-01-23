import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDB;
