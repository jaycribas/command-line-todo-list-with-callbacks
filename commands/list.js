const fs = require('fs');
const file = require('../taskStore')

module.exports = () => {
  const json = file.readTasks()
  setTimeout(() => console.table("To Do List", json.todos), 100)
}
