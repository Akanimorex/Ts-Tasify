import React from 'react';
import "./styles.css";

interface Props {
    todo:string;
    setToDo:React.Dispatch<React.SetStateAction<string>>
}

const InputField:React.FC<Props> = ({todo, seToDo}) => {
  return (
    <form className='input'>
        <input type="input" placeholder='Enter a task' value={todo} onChange={(e)=>seToDo(e.target.value)}  className='input__box'/>
        <button className='input_submit' type="type">Add</button>
    </form>
  )
}

export default InputField