const db = require('./db.service');

async function create(matches){
  const result = await db.query(
    `INSERT INTO matches 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`, 
    [
      matches.name, matches.released_year,
      matches.githut_rank, matches.pypl_rank,
      matches.tiobe_rank
    ]
  );

  let message = 'Error in creating matches';

  if (result.affectedRows) {
    message = 'matches created successfully';
  }

  return {message};
}

async function update(id, matches){
  const result = await db.query(
    `UPDATE matches 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`, 
    [
      matches.name, matches.released_year,
      matches.githut_rank, matches.pypl_rank,
      matches.tiobe_rank, id
    ]
  );

  let message = 'Error in updating matches';

  if (result.affectedRows) {
    message = 'matches updated successfully';
  }

  return {message};
}

module.exports = {
  create,
  update
}