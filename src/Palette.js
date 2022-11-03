import React, { useEffect } from 'react';
import './App.css';
// import { paletteList } from './paletteData.js'


function Palette({paletteList}) {

  return (
    <>
    {paletteList.map((palette, index) => (
      <div>
      <div class='color-palette'>
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

