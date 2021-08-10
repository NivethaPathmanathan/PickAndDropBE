module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    // Create a new Customer
    app.post("/customer", customer.create);

    // Retrieve all Customer
    app.get("/customer", customer.findAll);
 
    // Retrieve a single Customer with customerId
    app.get("/customer/:id", customer.findOne);

    // Update status with CustomerId
    app.put("/customer/:id", customer.updateById);
  
    // Delete a Customer with customerId
    app.delete("/customer/:id", customer.delete);
  
    // Create a new Customer
    app.delete("/customer", customer.deleteAll);
  };