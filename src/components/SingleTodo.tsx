import React, { useEffect, useRef, useState } from 'react';
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

    const [edit, setEdit] =  useState <boolean>(false);
    const [editTodo, setEditToDo] = useState<string>(todo.todo);


    const handleEdit = (e:React.FormEvent, id:number)=> {
        e.preventDefault();
        setToDos(todos.map(((todo) =>
            todo.id === id ? { ...todo, todo:editTodo } : todo
        )));
        setEdit(false);

    }

    const handleDone = (id: number) => {
        setToDos(todos.map(((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )));


    };

    const handleDel = (id: number) => {
        setToDos(todos.filter((todo) => todo.id !== id))
        // console.log(id, "ddelete id")
    };


    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])

    return (
        <form className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>



            {
                edit?(
                    <input ref={inputRef} value={editTodo} className="todos__single--text" onChange={(e)=>setEditToDo(e.target.value)} />
                ):(
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
                )
            }


            <div>
                <span className="icon">
                    <AiFillEdit onClick={()=>{
                        if(!edit && !todo.isDone){
                            setEdit(!edit)
                        }
                    }
                     } />
                </span>
                <span className="icon">
                    <AiFillDelete onClick={() => handleDel(todo.id)} />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div> 
        </form>
    )
}

export default SingleTodo