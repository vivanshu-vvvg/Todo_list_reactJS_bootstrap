// use (rafc) as a shortcut to get this syntex 

import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {

  return (
    <div className='container'>
      <h3 className=' my-4'> Todos List</h3> 
      {props.todos.length===0? "NO todos to Display ":
        props.todos.map((todo)=>{
            return (<>
              <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>  </>)
        })
      }
         
    </div>
  )
}

export default Todos;
