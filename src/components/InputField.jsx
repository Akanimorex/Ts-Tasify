import React, { useRef } from 'react';
import "./styles.css";

interface Props {
    todo:string;
    setToDo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setToDo, handleAdd}) => {

  const inputRef = useRef(null);


  return (
    <form className='input' 
    onSubmit={ (e)=>{
      handleAdd(e)
      inputRef.current?.blur()

    }
    }

    >
        <input type="input" 
        placeholder='Enter a task' 
        value={todo} 
        onChange={(e) =>setToDo(e.target.value)} 
        ref={inputRef} 
        className='input__box'/>

        <button className='input_submit' type="type">Add</button>
    </form>
  )
}

export default InputField;