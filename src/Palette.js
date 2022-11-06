import React, { useEffect } from 'react';
import './App.css';

function Palette({paletteList, setPaletteList}) {
  function deletePalette(e) {
    let index = e.target.id;
    let newArr = [...paletteList];
    newArr.splice(index, 1);
    setPaletteList(newArr);
  }

  return (
    <>
    {paletteList.map((palette, index) => (
      <div className='palette-container' key={index}>
        <div className='delete-btn' id={index} onClick={deletePalette}>&#10005;</div>
        <div className='color-palette'>
          {palette.colors.map((color, index) => (
            <div style={{ 'backgroundColor': color }} key={index} >&nbsp;</div>
          ))}
        </div>
        <h3>{palette.paletteName}</h3>
      </div>
    ))}
    </>
  );
}

export default Palette;

