const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://user:user1@cluster0.urels.mongodb.net/movies?retryWrites=true&w=majority',
      {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 30000,
      }
    );
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
