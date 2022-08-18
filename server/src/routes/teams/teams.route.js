const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/matches.controller');

/* GET programming languages. */
router.get('/', teamsController.get);
  
/* POST programming language */
router.post('/', teamsController.create);

/* PUT programming language */
router.put('/:id', teamsController.update);

/* DELETE programming language */
router.delete('/:id', teamsController.remove);

module.exports = router;