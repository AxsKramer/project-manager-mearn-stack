import React from 'react'

const Header = () => {
  return ( 
    <header className='app-header'>
      <p className='nombre-usuario'>
        Hi <span>Alexander</span>
      </p>
      <nav className='nav-principal'>
        <a href="#!">Sign off</a>
      </nav>
    </header>
  );
}
 
export default Header;