import { useState } from 'react';
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import Header from "./components/header/Header"
import TodoItem from './components/todo-iteam/TodoItem';


const initialState = [
  {text: "bye new mac", status: false, id:1},
  {text: "bye new iphone", status: true, id:2},
  {text: "bye new watch", status: true, id:3},
  {text: "bye new iphone 11 pro max", status: false, id:4},
]

function App() {
  const [todos, setTodos] = useState(initialState)


const onDelete = (id) => { 
  const newTodos = todos.filter((item) => item.id !==id)
  console.log(newTodos)
  setTodos(newTodos)
}

const onAddNewTodo = (str) => {
  setTodos([ ...todos,{text: str, status: false, id: Date.now() }  ]  )
}

const newTodos = todos.map((item) => <TodoItem id={item.id} text={item.text} status={item.status} onDelete={onDelete} />)

  return (
    <div className="App">
       
        <Header todoLenght={4} todoDone={0}  />
        <div className='content'>
          <CreateTodo onAddNewTodo={onAddNewTodo} />
          <div className="iteam">
              {newTodos}
           </div>      
       </div>
     </div>            
  );
}

export default App;
