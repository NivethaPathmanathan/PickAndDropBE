module.exports = app => {
    const status = require("../controllers/status.controller.js");

    //retrieve all status
    app.get("/status", status.findAllStatuses);
}