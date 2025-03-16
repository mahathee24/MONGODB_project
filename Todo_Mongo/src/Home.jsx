import React,{useState} from 'react'
import Create from './Create'


function Home() {
    const [todos, setTodo] = useState([])
  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create />
    {
        todos.length===0
        ? 
        <div><h2>No Record to Display</h2></div> 
        :
        todos.map(todo => (
        <div> 
            {todo}
        </div>
        ))
    }
    </div>
  )
}

export default Home
