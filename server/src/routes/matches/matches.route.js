const express = require('express');
const router = express.Router();
const matchesController = require('../controllers/matches.controller');

/* GET programming languages. */
router.get('/', matchesController.get);
  
/* POST programming language */
router.post('/', matchesController.create);

/* PUT programming language */
router.put('/:id', matchesController.update);

/* DELETE programming language */
router.delete('/:id', matchesController.remove);

module.exports = router;