function TodoListItem({ todo }) {
    const { id, text, checked } = todo
    return (  
        <div style={{ textDecoration: checked ? 'line-through' : 'none' }}>
            <input  type="checkbox"  checked={checked} />
            <span>{id}. {text}</span>
            <button>삭제</button>
        </div>
    )
}

export default TodoListItem;