const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Import mongoose
const Movie = require('../models/movieModel');

// Get all movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Get single movie
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid movie ID format', error: error.message });
  }
});

// Create a new movie
router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body); // Create a new movie instance using the request body
    const savedMovie = await newMovie.save(); // Save the movie to the database
    res.status(201).json(savedMovie); // Respond with the saved movie
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding movie', error: error.message });
  }
});

// Update movie
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  // Validate the ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid movie ID format' });
  }

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is applied to the updates
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating movie', error: error.message });
  }
});

// Delete movie
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
