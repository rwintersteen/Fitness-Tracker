const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Workout = require('../models');

//get workouts
router.get('/api/workouts', (req, res) => {
  Workout.find()
  .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json(err)
  })
});

//get workout by ID
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

//get workout in range
router.get('/api/workouts/range', (req,res) => {
  Workout.find()
  .then(data => {
      res.json(data)
  })
  .catch(err => {
      res.json(err)
  })
});

//add workout
router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then(data => res.json(data))
  .catch(err => { 
      res.json(err)
  })
});

module.exports = router;