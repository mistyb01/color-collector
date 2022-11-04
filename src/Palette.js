import React, { useEffect } from 'react';
import './App.css';

function Palette({paletteList}) {
  function deletePalette(e) {
    console.log(e);
  }

  // issue: how to target the color palette when delete btn is pressed?
  return (
    <>
    {paletteList.map((palette, index) => (
      <div className='palette-container'>
        <div className='delete-btn' onClick={deletePalette}>&#10005;</div>
        <div className='color-palette'>
          {palette.colors.map((color, index) => (
            <div style={{ 'backgroundColor': color }} >&nbsp;</div>
          ))}
        </div>
        <h3>{palette.paletteName}</h3>
      </div>
    ))}
    </>
  );
}

export default Palette;

