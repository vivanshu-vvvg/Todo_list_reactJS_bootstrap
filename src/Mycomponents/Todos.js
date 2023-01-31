// use (rafc) as a shortcut to get this syntex 

import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
 let mystyle ={
  minHeight : '70vh',
  margin:"10px auto"
 }
  return (
    <div className='container' style={mystyle}>
      <h3 className=' my-8'> <hr/>Todos List<hr/></h3> 
      {props.todos.length===0? "NO todos to Display ":
        props.todos.map((todo)=>{
            return (<TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })
      }
         
    </div>
  )
}

export default Todos;
