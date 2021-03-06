'use strict'

const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const urlFile = './api/state.txt'

let trelloData = JSON.parse(fs.readFileSync(urlFile, 'utf8'))

const app = express()

function generate_id () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
  }

  return s4() + s4() + s4()
}

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

// GET ALL DATA
app.get('/api/trello', (req, res) => {
  res.send(trelloData)
})

// ADD NEW TASK
app.post('/api/trello/task', (req, res) => {
  const task = {
    id: generate_id(),
    listId: req.body.listId,
    completed: false,
    taskEditing: true,
    title: ''
  }

  trelloData.tasks.push(task)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.send(task)
})

// EDIT TASK
app.put('/api/trello/task/edit/:id', (req, res) => {
  const editedTasks = trelloData.tasks.map(task => {
    if (task.id !== Number(req.params.id)) {
      return task
    }

    return Object.assign({}, task, {
      taskEditing: true
    })
  })

  trelloData.tasks = [...editedTasks]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// SAVE TASK
app.put('/api/trello/task/save/:id', (req, res) => {
  const saveTasks = trelloData.tasks.map(task => {
    if (task.id !== Number(req.params.id)) {
      return task
    }

    return Object.assign({}, task, {
      title: req.body.title,
      taskEditing: false
    })
  })

  trelloData.tasks = [...saveTasks]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// CHANGE STATUS TASK
app.put('/api/trello/task/complete/:id', (req, res) => {

  const task = trelloData.tasks.find(task => task.id === Number(req.params.id))

  if (!task) return res.sendStatus(404)

  task.completed = !task.completed
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.json(task)
})

// DELETE TASK
app.delete('/api/trello/task/:id', (req, res) => {
  const index = trelloData.tasks.findIndex(task => task.id === Number(req.params.id))

  if (index === -1) return res.sendStatus(404)

  trelloData.tasks.splice(index, 1)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// DELETE LIST
app.delete('/api/trello/list/:id', (req, res) => {
  const index = trelloData.lists.findIndex(list => list.id === Number(req.params.id))

  if (index === -1) return res.sendStatus(404)

  trelloData.lists.splice(index, 1)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// ADD NEW LIST
app.post('/api/trello/list', (req, res) => {
  const list = {
    id: generate_id(),
    title: '',
    listEditing: true,
    boardId: req.body.boardId
  }

  trelloData.lists.push(list)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.send(list)
})

// EDIT LIST
app.put('/api/trello/list/edit/:id', (req, res) => {
  const editedLists = trelloData.lists.map(list => {
    if (list.id !== Number(req.params.id)) {
      return list
    }

    return Object.assign({}, list, {
      listEditing: true
    })
  })

  trelloData.lists = [...editedLists]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// SAVE LIST
app.put('/api/trello/list/save/:id', (req, res) => {
  const saveLists = trelloData.lists.map(list => {
    if (list.id !== Number(req.params.id)) {
      return list
    }

    return Object.assign({}, list, {
      title: req.body.title,
      listEditing: false
    })
  })

  trelloData.lists = [...saveLists]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// ADD NEW BOARD
app.post('/api/trello/board', (req, res) => {
  const board = {
    id: generate_id(),
    title: `New Board ${trelloData.boards.length + 1}`,
    boardEditing: false
  }

  trelloData.boards.push(board)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.send(board)
})

// EDIT BOARD
app.put('/api/trello/board/edit/:id', (req, res) => {
  const editedBoards = trelloData.boards.map(board => {
    if (board.id !== Number(req.params.id)) {
      return board
    }

    return Object.assign({}, board, {
      listEditing: true
    })
  })

  trelloData.boards = [...editedBoards]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// SAVE BOARD
app.put('/api/trello/board/save/:id', (req, res) => {
  const saveBoards = trelloData.boards.map(board => {
    if (board.id !== Number(req.params.id)) {
      return board
    }

    return Object.assign({}, board, {
      title: req.body.title,
      listEditing: false
    })
  })

  trelloData.boards = [...saveBoards]
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

// DELETE BOARD
app.delete('/api/trello/board/:id', (req, res) => {
  const index = trelloData.boards.findIndex(board => board.id === Number(req.params.id))

  if (index === -1) return res.sendStatus(404)

  trelloData.boards.splice(index, 1)
  fs.writeFileSync(urlFile, JSON.stringify(trelloData))
  res.sendStatus(204)
})

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`))