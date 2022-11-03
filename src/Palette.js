import React, { useEffect } from 'react';
import './App.css';

function Palette({paletteList}) {

  return (
    <>
    {paletteList.map((palette, index) => (
      <div className='palette-container'>
              <div className='delete-btn'>&#10005;</div>
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

