const sql = require("./db.js");

// constructor
const Status = function(status){
  this.StatusName = status.StatusName
};


Status.getAll = result => {
  sql.query("SELECT * FROM status", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("status: ", res);
    result(null, res);
  });
};

module.exports = Status;