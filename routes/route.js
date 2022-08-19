var express = require('express');
var route = express.Router();
const todos = require("../controllers/todolist.js");
   route.post("/data", todos.createTodo);
   // Retrieve all todos
   route.get("/data", todos.getTodo);
   // Retrieve all published todos
   route.get("/data/:id", todos.getbyIdTodo);
   // Update a Tutorial with id
   route.put("/data/:id", todos.updateTodo);
   // Delete a Tutorial with id
   route.delete("/data/:id", todos.deleteTodo);
   // Delete all todos
  module.exports = route;