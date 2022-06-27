const Movies = require("../model/Movies");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const results = await Movies.get(req, res);
      res.status(200).send(results);
    } catch (error) {
      res.send(error);
    }
  },
  addNewMovies: async (req, res) => {
    try {
      const results = await Movies.add(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updateMovies: async (req, res) => {
    try {
      const results = await Movies.update(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  deleteMovies: async (req, res) => {
    try {
      const results = await Movies.remove(req, res);
      res.status(201).send(results);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
