module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  // Create a new Customer
  app.post("/todos", todos.create);

  // Retrieve all Customers
  app.get("/todos", todos.findAll);

  // Retrieve a single Customer with todoId
  app.get("/todos/:todoId", todos.findOne);

  // Update a Customer with todoId
  app.put("/todos/:todoId", todos.update);

  // Delete a Customer with todoId
  app.delete("/todos/:todoId", todos.delete);

  // Create a new Customer
  app.delete("/todos", todos.deleteAll);
};
