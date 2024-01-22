// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onClickDeleteButton} = props
  const {id, title} = todoDetails

  const onDeleteButton = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="list">
      <p className="title">{title}</p>
      <button type="button" onClick={onDeleteButton} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
