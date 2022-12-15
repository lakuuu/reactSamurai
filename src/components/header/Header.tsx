import React from "react"
// @ts-ignore
import css from "./Header.module.css"


interface PropsType{
    todoLenght: number | string;
    todoDone: number | string;
}

const Header = (props: PropsType) => {
    return(
        <div className={css.wrapper}>
            <h1 className={css.title}>TODOS ({props.todoLenght}/{props.todoDone}) </h1>
         </div>
    )
}

export default Header