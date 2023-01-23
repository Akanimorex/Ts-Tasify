import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';



const  App:React.FC = () => {
  const [todo, setToDo] = useState <string>("")
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setToDo={ setToDo } />
    </div>
  );
}

export default App;
