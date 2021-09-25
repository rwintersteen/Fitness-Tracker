const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercises: [
    {
        type: String,
        name: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number, 
    }]
})

const workoutSchema = new Schema({
    day: { type: Date, require: true },
    exercises: [exerciseSchema],
    distance: Number
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;