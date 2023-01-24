
import React, {useState} from 'react';

const AddTodo= (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const Submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        props.addTodo(title,desc);
    }
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
        <form onSubmit={Submit}>
            <div className="mb-3">
                <label htmlFor="title" class="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
                
            </div>
            <div class="mb-3">
                <label htmlFor="desc" class="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} class="form-control" id="desc"/>
            </div>
            <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo;
