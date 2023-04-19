import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p>{title}</p>
      <button type="button" onClick={onDeleteTodo} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
