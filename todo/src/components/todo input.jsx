import { useState } from "react"

function TodoInput({ addTodo }){
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        if(todo.trim() !== ""){
            addTodo(todo)
            setTodo("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="input-group">
            <input 
                type="text" 
                placeholder="What needs to be done?"
                value={todo} 
                onChange={e => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className="add-btn" onClick={handleSubmit}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default TodoInput