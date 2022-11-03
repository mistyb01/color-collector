import React from 'react';
import './App.css';
import Header from './Header.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import AddPopup from './AddPopup.js';
import { useState, useEffect } from 'react';



function App() {
  const storedPalettes = JSON.parse(localStorage.getItem('savedPalettes') || '[]');

  const [palettes, setPalettes] = useState(storedPalettes);
  const [addWindow, setAddWindow] = useState(false);

  // state variables to hold values for a new palette
  const [paletteName, setPaletteName] = useState('');
  const [colorList, setColorList] = useState('');

  // update localStorage whenever the palettes array is updated
  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(palettes));
    //reset previous values
    setPaletteName('');
    setColorList('');
  }, [palettes]);
  
  // on page load, set palettes to the saved localstorage value 
  // useEffect(() => {
  //   const savedPalettes = JSON.parse(localStorage.getItem('savedPalettes'));
  //   if (savedPalettes) {
  //     setPalettes(savedPalettes);
  //   }
  // }, [])

  function handlePaletteAdd() {
    const newPalette = {
      id: palettes.length, 
      paletteName: paletteName, 
      colors: colorList }
    // palettes.push(newPalette);
      setPalettes(saved => [...saved, newPalette]);
    }

  return (
    <>
    <Header
      addWindow = {addWindow}
      setAddWindow = {setAddWindow}
    />
    <main>
      {addWindow && (
        <AddPopup
          handlePaletteAdd={handlePaletteAdd}
          colorList={colorList}
          setColorList={setColorList}
          paletteName={paletteName}
          setPaletteName={setPaletteName}
        />
      )}
    <Gallery/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
