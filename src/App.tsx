import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';



const  App:React.FC = () => {
 
  const [todo, setToDo] = useState <string>("");
  const [todos,setToDos] = useState <Todo[]> ([]);

  const handleAdd =(e: React.FormEvent)=>{
    e.preventDefault();

    if(todos){
      setToDos([...todos, {id:Date.now(), todo, isDone:false}]);
      setToDo("")
    }

  };

  const handleDel = ()=>{
    
  }
  console.log(todo);
  console.log(todos, "TODOS");
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setToDo={ setToDo } handleAdd={handleAdd} />
      <TodoList todos={todos} setToDos={setToDos} />
    </div>
  );
}

export default App;
