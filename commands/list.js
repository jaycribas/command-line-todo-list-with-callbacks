const fs = require('fs');
const file = require('../taskStore')

module.exports = () => {
  const json = file.readTasks()
  setTimeout(() => {
    console.table("To Do List", json.todos), 100
    if(json.todos.length === 0) console.log('You have 0 tasks.')
    console.log(`You have ${json.todos.length} tasks.`)
  })
}
