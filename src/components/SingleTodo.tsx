import React from 'react';
import { Todo } from './model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setToDos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({ todo, todos, setToDos }: Props) => {

    const handleDone = (id: number) => {
      console.log("hello")
        // console.log(id, "strike");
        // console.log(todo.id, "todos id");
        // for (let i=0;i<todos.length; i++){
        //     if(todos[i].id === id){
        //         console.log("it is true")
        //     } else {console.log("false")}
        // }
       setToDos( todos.map(((todo) =>
            todo.id === id ? { ...todo, isDone:!todo.isDone } : todo
            // todo.id === id ? console.log("true") : console.log("false")
            )));
            
            // console.log(todo.isDone,"boolean");
    
    }
    return (
        <form className='todos__single'>
            {
                todo.isDone ? (
                    <s className="todos__single--text" >
                        {todo.todo}
                    </s>
                ) :
                    (
                        <span className="todos__single--text">
                            {todo.todo}
                        </span>
                    )
            }

            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo