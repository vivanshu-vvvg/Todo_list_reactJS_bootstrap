
import './App.css';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';
import React, {useState} from 'react';
import AddTodo from './AddTodo';

export default function App() {
  
  const addTodo =(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno = todos[todos.length-1].sno +1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const onDelete =(todo)=>{
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }


  const [todos, setTodos]=useState([
    {
      sno: 1,
      title:"go to class no.1",
      desc: "go fast for 1st class"
    },
    { 
      sno: 2,
      title:"go to class no.2",
      desc: "go fast for 2st class"
    },
    {  
      sno: 3,
      title:"go to class no.3",
      desc: "go fast for 3st class"
    }
  ])


  return (
    <div className="App">
    
      <Header title = "My Todos list"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    
    </div>
  );
}

// export default App;
