const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

async function query(sql, params) {
    db.serialize(() => {
        const sqlStatement = db.prepare(sql);
        
        sqlStatement.run(params);

        sqlStatement.finalize()
    });
}

module.exports = {
  query
}