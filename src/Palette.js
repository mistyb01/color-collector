import React, { useEffect } from 'react';
import './App.css';
import { paletteList } from './paletteData.js'


function Palette() {

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

// (<div>
//   {this.state.people.map((person, index) => (
//       <p>Hello, {person.name} from {person.country}!</p>
//   ))}
//   </div>);