
import './App.css';
import Header from './Header';
import Todos from './Todos';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import AddTodo from './AddTodo';
import About from './About';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

export default function App() {
  let initTodo;
  if(  localStorage.getItem("todos")===null){
      initTodo = [];
    }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  
  const onDelete =(todo)=>{
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify("todos"));
  }
  const addTodo =(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno +1;}
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

         
    
  }



  const [todos, setTodos]=useState(
  initTodo
  );
  
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])


  return (
    <div>
    <Router>
      <Header title = "My Todos list"/>
        <Switch>
                <Route exact path='/' render={() =>{
                  return(<div>
                    <AddTodo addTodo={addTodo}/>
                      <Todos todos={todos} onDelete={onDelete}/>
                    </div>)
                  }}>
                </Route>
                <Route exact path='/about' component={About }/>
        </Switch>
                 
        <Footer/>
      </Router>
    </div>
 );
}

