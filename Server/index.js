const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the Vite frontend
  }));

app.use(express.json())

mongoose.connect('mongodb+srv://prax:prax0907@cluster0.x4pwz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
