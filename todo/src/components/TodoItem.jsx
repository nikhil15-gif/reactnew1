function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => toggleComplete(todo.id)}>
        <span className="checkbox">
          {todo.completed && <span className="checkmark">✓</span>}
        </span>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
        </svg>
      </button>
    </li>
  )
}

export default TodoItem
