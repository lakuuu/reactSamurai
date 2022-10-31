import { useState } from "react";
import css from "./CreateTodo.module.css";

const CreateTodo = (props) => {
  const [inpValue, setInpValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    props.onAddNewTodo(inpValue);
    setInpValue("");
  };

  const handleInput = (event) => {
    setInpValue(event.target.value);
  };
  return (
    <form onSubmit={submit}>
      <input
        value={inpValue}
        onChange={handleInput}
        className={css.input}
        type="text"
        placeholder="Enter todo here"
      />
      <button className={css.add}>+Submit</button>
    </form>
  );
};

export default CreateTodo;
