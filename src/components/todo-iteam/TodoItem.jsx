import css from  "./todoitem.module.css"



const TodoItem = (props) => {
    console.log(props)
    const handleDelete = () => {
        props.onDelete(props.id)
    }
    return (
        <div className={css.wrapper}>
       <label>     
        <input type="checkbox" checked={props.status} />
            <span>{props.text}</span>
        </label>
             <div className={css.btns}>
                    <button className={css.btn}>Edit</button>
                    <button onClick={handleDelete} className={css.btn}>Del</button>
            </div>
        </div>    
)
}


export default TodoItem;