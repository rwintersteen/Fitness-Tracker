const db = require("../models")

module.exports = (app) => {

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
}