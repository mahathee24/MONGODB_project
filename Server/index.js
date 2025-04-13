const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo.js');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

mongoose.connect('mongodb+srv://prax:prax0907@cluster0.x4pwz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ GET route
app.get('/get', async (req, res) => {
    try {
        const tasks = await TodoModel.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ POST route
app.post('/add', async (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }

    try {
        const newTask = await TodoModel.create({ task });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ PUT route (Fixed)
app.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    if (!task) {
        return res.status(400).json({ error: 'Task is required for update' });
    }

    try {
        const updatedTask = await TodoModel.findByIdAndUpdate(
            id,
            { task },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ DELETE route
app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const deletedTask = await TodoModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
