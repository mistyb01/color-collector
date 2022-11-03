import React from 'react';
import './App.css';

function Header({setAddWindow}) {

  const handleAddWindow = event => {
    setAddWindow(current => !current);
  }

  return (
    <>
    <header>
        <h1>color collector</h1>
        <nav>
        <span onClick={handleAddWindow}>add</span>
        <span>tags</span>
        <span>settings</span>
        </nav>

    </header>
    </>
  );
}

export default Header;
