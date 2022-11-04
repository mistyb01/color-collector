import React from 'react';
import './App.css';
function AddPopup({handlePaletteAdd, setPaletteName, colorList, 
  setColorList, setAddWindow}) {

  function handlePaletteName(e) {
    setPaletteName(e.target.value);
  }

  function handleColorList(e) {
    let colorArr = [...colorList];
    colorArr[e.target.id] = e.target.value;
    console.log(colorArr);
    setColorList(colorArr);
  }

  function handleWindowClose() {
    setAddWindow(current => !current)
  }

  return (
    <>
      <section id="add-popup">
          <div className='delete-btn' onClick={handleWindowClose}>&#10005;</div>
          <h1>new palette!</h1>
          <form onSubmit={handlePaletteAdd}>
            <label>
              palette name
              <input type="text" onChange={handlePaletteName}/>
            </label>
             
            <label>
              color 1
              <input type="text" id="0" onChange={handleColorList}/>
            </label>
             
            <label>
              color 2
              <input type="text" id="1" onChange={handleColorList}/>
            </label>
             
            <label>
              color 3
              <input type="text" id="2" onChange={handleColorList}/>
            </label>
             
            <input type="submit" value="submit"/>
          </form>
          <div className='palette-container'>
            <div className='color-palette'>
          {colorList && colorList.map((color) => (
            <div style={{ 'backgroundColor': color }} >&nbsp;</div>
          ))}
          </div>
          </div>
      </section>
    </>
  );
}

export default AddPopup;
