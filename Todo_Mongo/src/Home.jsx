import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        const newTask = prompt("Enter updated task:");
        if (newTask) {
            axios.put(`http://localhost:3002/update/${id}`, { task: newTask })
                .then(result => {
                    location.reload(); // Keeping location.reload()
                })
                .catch(err => console.log(err));
        }
    };
    
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3002/delete/${id}`)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create />
            {todos.length === 0 ? (
                <div><h2>No Record</h2></div>
            ) : (
                todos.map((todo) => ( // Fixed parentheses here
                    <div key={todo._id} className='task'> 
    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
        {todo.done ? 
            <BsCircleFill className='icon' /> :
            <BsCircleFill className='icon' />
        }
        <p className={todo.done ? 'line_through' : ""}>{todo.task}</p>
    </div>
    <div>
        <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
    </div>
</div>

                ))
            )}
        </div>
    );
}

export default Home;
