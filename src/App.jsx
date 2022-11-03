import React from 'react';
import './App.css';
import Header from './Header.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import AddPopup from './AddPopup.js';
import { useState, useEffect } from 'react';



function App() {
  const [palettes, setPalettes] = useState([]);
  const [addWindow, setAddWindow] = useState(false);

  // update localStorage whenever the palettes array is updated
  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(palettes));
  }, [palettes]);
  
  // on page load, set palettes to the saved localstorage value 
  useEffect(() => {
    const savedPalettes = JSON.parse(localStorage.getItem('savedPalettes'));
    if (savedPalettes) {
      setPalettes(savedPalettes);
    }
  }, [])

  return (
    <>
    <Header
      addWindow = {addWindow}
      setAddWindow = {setAddWindow}
    />
    <main>
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
