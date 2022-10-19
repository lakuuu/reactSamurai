import css from  "./todoitem.module.css"
const TodoItem = () => {
    return (
        <div className={css.todoitems}>
        <input type="checkbox"></input>
        <div>TodoItem</div>
        </div>    
    )
}


export default TodoItem;