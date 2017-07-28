# Command Line Todo List With Callbacks

This benchmark modules is the 2nd of a series of modules designed to take the
same problem and make it increasingly more complex as you learn new skills.

This module assumes you've already completed the
[Command Line Todo List](../../modules/Command-Line-Todo-List) module.

In this version we'll move from using synchronous code to using asynchronous
code.

## Skills

All the skills listed in the
[Command Line Todo List](../../modules/Command-Line-Todo-List/#skills)
module plus:

- Can use `fs.readFile` to read from a file in Node
- Can use `fs.writeFile` to write to a file in Node

## Description

See the description in the
[Command Line Todo List](../../modules/Command-Line-Todo-List/#description)
module.


## Specs

The specs for this module are the same as the specs listed in the
[Command Line Todo List](../../modules/Command-Line-Todo-List/#specs) module
except instead of `fs.readFileSync` and `fs.writeFileSync` you need to use
`fs.readFile` and `fs.writeFile` requiring you to use callbacks and async code
flow control.


## Resources

### Videos

**Spoiler alert!** The following videos include example solutions. For your own learning, it's suggested that you attempt this module _before_ watching the videos.

- [Testing Command-Line Todo App (Part 1: Architecture & Refactoring)](https://youtu.be/icrNTnNLV2Q)
- [Testing Command-Line Todo App (Part 2: Writing Unit & Integration Tests)](https://youtu.be/TVr_eBdSukw)
## Description

Write a command line script called `tasks` that allows the user to manage a list
of tasks from the terminal.

Your `tasks` command should support the following sub-commands:

| command  | description                                            | example usage                       |
|----------|--------------------------------------------------------|-------------------------------------|
| add      | adds the specified task                                | ./tasks add Finish reading Flatland |
| list     | lists the incomplete tasks                             | ./tasks list                        |
| complete | marks the task with `id` equal to `<task-id>` complete | ./tasks complete `<task-id>`        |
| delete   | deleted the specified task                             | ./tasks delete `<task-id>`          |


In this 1st version the data for your tasks should be saved to a file called
`tasks.json`.


## Specs

- Your command should be called `tasks`
- The `tasks` command file should have a shebang pointing to `node`
- The `tasks` command file should have execute permissions
- Tasks are persisted to a `json` file using `fs.readFileSync` and `fs.writeFileSync`
- The `list` command is implemented in `./commands/list.js`
- The `add` command is implemented in `./commands/add.js`
- The `complete` command is implemented in `./commands/complete.js`
- The `delete` command is implemented in `./commands/delete.js`
- Add tests using Mocha and Chai for all functions
- User receives an error message if they enter an invalid command
- Your program should create the `tasks.json` if the file doesn't exist
- `tasks.json` is ignored and not checked into your Git repository

## Example Usage



##### Listing tasks when you have no tasks

```bash
$ ./tasks list

ID Description
-- -----------

You have 0 tasks
```

##### Adding some tasks

```
$ ./tasks add "Buy milk"
Created task 1
```

```
$ ./tasks add "Buy eggs"
Created task 2
```

```
$ ./tasks add "Bake a cake"
Created task 3
```

```
$ ./tasks add "Put groceries in the fridge"
Created task 4
```

##### Listing tasks when you have some

```bash
$ ./tasks list

ID Description
-- -----------
1  Buy milk
2  Buy eggs
3  Bake cake
4  Put groceries in the fridge

You have 4 tasks
```

##### Completing a task

```
$ ./tasks complete 1
Completed task 1: 'Buy milk'
```

##### Deleting a task

```
$ ./tasks delete 2
Deleted task 2: 'Buy eggs'
```

##### Listing after completing and/or deleteing tasks

```bash
$ ./tasks list

ID Description
-- -----------
3  Bake cake
4  Put groceries in the fridge

You have 4 tasks
```


## Resources

### Reading

- [Docs for fs.readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)
- [Docs for fs.writeFileSync](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options)
