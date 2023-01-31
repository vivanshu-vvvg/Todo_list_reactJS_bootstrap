import React from 'react'

const About = () => {
    let mystyle ={
  minHeight : '83vh',
  margin:"10px auto"
 }
  return (
    <div className='container' style={mystyle}>
      <h2>This is an about component</h2>
      <p>To-Do List project is an application specially built to keep track of errands or tasks that need to be done. This application will be like a task keeper where the user would be able to enter the tasks that they need to do. Once they are done with their tasks they can also remove them from the list.</p>
    </div>
  )
}

export default About
