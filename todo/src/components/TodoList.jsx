import TodoItem from "./TodoItem"

function TodoList({ todos, deleteTodo, toggleComplete }) {
  if (todos.length === 0) {
    return <p className="empty-message">No tasks yet. Add one to get started!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </ul>
  )
}

export default TodoList
