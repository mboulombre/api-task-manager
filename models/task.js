const mongoose = require('mongoose');

const taskSchema = new  mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "the minLength must be 3 letters"],
        trim: true,
        require: true,
    },
    completed: Boolean
  });

  const TaskModel = mongoose.model('Task', taskSchema);

  module.exports = TaskModel;


