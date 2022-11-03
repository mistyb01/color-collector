import React from 'react';
import './App.css';
import Header from './Header.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import AddPopup from './AddPopup.js';
import { useState, useEffect } from 'react';



function App() {

  const [addWindow, setAddWindow] = useState(false);

  

  return (
    <>
    <Header
      addWindow = {addWindow}
      setAddWindow = {setAddWindow}
    />
    <main>
      {/* <AddPopup/> */}
      {addWindow && (
        <AddPopup/>
      )}
    <Gallery/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
