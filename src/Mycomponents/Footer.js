// use (rafc) as a shortcut to get this syntex 

import React from 'react'

const Footer = () => {
  let footerStyle={
    position:"relative",
    top: "10vh",
    width:"100vw",

  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p >
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer ;
