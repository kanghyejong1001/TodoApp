function TodoListItem({ todo, onToggle, onDelete }) {
    const { id, text, checked } = todo
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  onChange={() => onToggle(id)} checked={checked} />
            <span>{id}. {text}</span>
            <button onClick={() => onDelete(id)}>삭제</button>
        </div>
    )
}

export default TodoListItem;