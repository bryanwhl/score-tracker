const teams = require('../services/teams.service');

async function get(req, res, next) {
  try {
      res.json(await teams.getMultiple(req.query.page));
  } catch (err) {
      console.error(`Error while getting teams`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await teams.create(req.body));
  } catch (err) {
    console.error(`Error while creating teams`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await teams.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating teams`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await teams.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting teams`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};