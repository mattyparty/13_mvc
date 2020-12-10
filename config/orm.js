// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll(tableInput, colToSearch, valOfCol) {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT * FROM ?? WHERE ? = ?`;
      connection.query(
        queryString,
        [tableInput, colToSearch, valOfCol],
        (err, data) => {
          if (err) return reject(err);
          resolve(data);
        }
      );
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
