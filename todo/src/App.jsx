import { useState } from "react"
import Header from "./components/header"
import TodoInput from "./components/todo input"
import TodoList from "./components/TodoList"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="app-container">
      <div className="todo-card">
        <Header />
        <TodoInput addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
        />
      </div>
    </div>
  )
}

export default App