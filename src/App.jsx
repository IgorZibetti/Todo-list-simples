import { useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([
    
    
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir a academia",
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: 'Estudos',
      isCompleted: false,
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }
  
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }
  
  const completyTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search, setSearch] = useState("")
  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos
        .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} 
          completyTodo={completyTodo}  
          removeTodo={removeTodo}/>
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
