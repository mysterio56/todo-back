const Todo = require("../models/todo.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

console.log(req.body);

  // Create a Todo
  const todo = new Todo({
    description: req.body.description,
    title: req.body.title,
    created: new Date().toISOString().slice(0, 19).replace('T', ' '),
    completed: 0,
  });
console.log(todo);
  // Save Todo in the database
  Todo.create(todo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Todo."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Todo.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todos."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Todo.findById(req.params.todoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Todo with id ${req.params.todoId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Todo with id " + req.params.todoId
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Todo.updateById(
    req.params.todoId,
    new Todo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Todo with id ${req.params.todoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Todo with id " + req.params.todoId
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Todo.remove(req.params.todoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Todo with id ${req.params.todoId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Todo with id " + req.params.todoId
        });
      }
    } else res.send({ message: `Todo was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  Todo.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all todos."
      });
    else res.send({ message: `All Todos were deleted successfully!` });
  });
};
