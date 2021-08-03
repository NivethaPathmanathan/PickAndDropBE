const Status = require("../models/status.model.js");

  // Create a status
//   const status = new Status({
//     StatusName: req.body.StatusName
//   });

exports.findAllStatuses = (req, res) => {
  Status.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving status."
        });
      else res.send(data);
    });
}
