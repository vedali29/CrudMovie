const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const Movie = require('./models/movieModel');
const initialMovies = require('./data/movies');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);

// Start server
const PORT = 3000;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('MongoDB connection established successfully.');

    // Seed the database
    await Movie.deleteMany({});
    await Movie.insertMany(initialMovies);
    console.log('Database seeded with initial movie data.');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1); // Exit with failure
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.connection.close();
  console.log('MongoDB connection closed.');
  process.exit(0);
});

startServer();
