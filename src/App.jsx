import React from 'react';
import './App.css';
import Header from './Header.js';
import Palette from './Palette';
import Footer from './Footer.js';
import AddPopup from './AddPopup.js';
import { useState, useEffect } from 'react';



function App() {
  const storedPalettes = JSON.parse(localStorage.getItem('savedPalettes') || '[]');

  const [palettes, setPalettes] = useState(storedPalettes);
  const [addWindow, setAddWindow] = useState(false);

  // state variables to hold values for a new palette
  const [paletteName, setPaletteName] = useState('');
  const [colorList, setColorList] = useState([]);

  // update localStorage whenever the palettes array is updated
  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(palettes));
    //reset previous values
    setPaletteName('');
    setColorList('');
  }, [palettes]);
  
  function handlePaletteAdd() {
    const newPalette = {
      id: palettes.length, 
      paletteName: paletteName, 
      colors: colorList }
    // add new value to a state variable that is an array of objects 
      setPalettes(saved => [...saved, newPalette]);
    }

  return (
    <>
    <Header
      addWindow = {addWindow}
      setAddWindow = {setAddWindow}
    />
    {addWindow && (
        <div className="dark-overlay"></div>
    )}
    <main>
      {addWindow && (
        <AddPopup
          handlePaletteAdd={handlePaletteAdd}
          colorList={colorList}
          setColorList={setColorList}
          paletteName={paletteName}
          setPaletteName={setPaletteName}
          setAddWindow={setAddWindow}
        />
      )}
      
    
    <section id="gallery">
        <Palette
          paletteList={palettes}/>
      </section>

    </main>
    <Footer/>
    </>
  );
}

export default App;
