import React from 'react';
import "./styles.css";
import { Todo } from './model';

interface Props {
    todos:Todo[];
    setToDos:React.Dispatch<React.SetStateAction<Todo[]>>
}



function TodoList({ todos, setToDos }: Props) {
    return (
        <div className="todos">

        </div>
    );
}

export default TodoList;