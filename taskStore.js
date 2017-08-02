const fs = require('fs')
require('console.table')

function readTasks(){
  return JSON.parse(
    fs.readFileSync('tasks.json', (err, data) => {
      if(err) console.log(err)
    })
  )
}

function writeTasks(){}

module.exports = { readTasks, writeTasks }
