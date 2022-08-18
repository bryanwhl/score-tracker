const db = require('./db.service');

async function get(){
	const rows = await db.query(
	  `SELECT *
	  FROM teams`,
	);
  
	return rows;
}

async function create(teams){
  const result = await db.query(
		`INSERT INTO teams 
		(name, released_year, githut_rank, pypl_rank, tiobe_rank) 
		VALUES 
		(?, ?, ?, ?, ?)`, 
		[
			teams.name, teams.released_year,
			teams.githut_rank, teams.pypl_rank,
			teams.tiobe_rank
		]
  );

  let message = 'Error in creating teams';

  if (result.affectedRows) {
		message = 'teams created successfully';
  }

  return {message};
}

async function update(id, teams){
  const result = await db.query(
		`UPDATE teams 
		SET name=?, released_year=?, githut_rank=?, 
		pypl_rank=?, tiobe_rank=? 
		WHERE id=?`, 
		[
			teams.name, teams.released_year,
			teams.githut_rank, teams.pypl_rank,
			teams.tiobe_rank, id
		]
  );

  let message = 'Error in updating teams';

  if (result.affectedRows) {
		message = 'teams updated successfully';
  }

  return {message};
}

module.exports = {
  get,
  create,
  update
}