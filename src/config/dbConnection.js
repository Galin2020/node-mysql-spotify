const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '188.166.68.8',
    user: 'root',
    password: 'Pgalo2405',
    database: 'spotyfy'
  });
}