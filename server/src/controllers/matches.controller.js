const matches = require('../services/matches.service');

async function get(req, res, next) {
  try {
      res.json(await matches.get());
  } catch (err) {
      console.error(`Error while getting matches`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await matches.create(req.body));
  } catch (err) {
    console.error(`Error while creating matches`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await matches.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating matches`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
};