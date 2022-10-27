import React from 'react';
import './App.css';

const paletteList = [
  {paletteId: 1, paletteName: "strawberry cake", colors: ['lightpink', 'antiquewhite', 'hotpink'] },
  {paletteId: 2, paletteName: "summer sky", colors: ['mediumturquoise', 'aquamarine', 'skyblue'] }
]

function Palette() {
  return (
    <>
    {paletteList.map((palette, index) => (
      <div class='color-palette'>
        {palette.colors.map((color, index) => (
        <div style={{ 'backgroundColor': color }} >&nbsp;</div>
        ))}
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