import { createRenderer } from "react-dom/test-utils"
import css from "./CreateTodo.module.css"

const CreateTodo = () => {
    return (
        <div>
            <input className={css.input} type="text" placeholder="Enter todo here" />
            <button className={css.add}>+Submit</button>
        </div>
    )
}

export default CreateTodo
