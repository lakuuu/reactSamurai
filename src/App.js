import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/create-todo/CreateTodo";
import Header from "./components/header/Header";
import TodoItem from "./components/todo-iteam/TodoItem";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const onAddNewTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }]);
  };

  const onStatusChange = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newArr);
  };

  const onEdit = (id, newText) => {
      const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo
    })
    setTodos(newArr)
  }

  const newTodos = todos.map((item) => (
    <TodoItem
      id={item.id}
      text={item.text}
      status={item.status}
      onDelete={onDelete}
      onStatus={onStatusChange}
      setTodos={onAddNewTodo}
      onEdit={onEdit}
    />
  ));

  const todoDone = todos.reduce((akk, item) => {
    return akk + Number(item.status);
  }, 0);
  return (
    <div className="App">
      <Header todoLenght={todos.length} todoDone={todoDone} />
      <div className="content">
        <CreateTodo onAddNewTodo={onAddNewTodo} />
        <div className="iteam">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
