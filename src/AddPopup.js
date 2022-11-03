import React from 'react';
import './App.css';
function AddPopup({handlePaletteAdd, setPaletteName, setColorList}) {

  function handlePaletteName(e) {
    // console.log(e.target.value);
    setPaletteName(e.target.value);
  }

  function handleColorList(e) {
    let colorStr = e.target.value;
    let colorArr = colorStr.split(',');
    setColorList(colorArr);
  }

  return (
    <>
      <section id="add-popup">
          <h1>new palette!</h1>
          <form onSubmit={handlePaletteAdd}>
            <label>
              palette name
              <input type="text" onChange={handlePaletteName}/>
            </label>
            <br/>
            <label>
              colors
              <input type="text" onChange={handleColorList}/>
            </label>
            <br/>
            <input type="submit" value="submit"/>
          </form>
      </section>
    </>
  );
}

export default AddPopup;
