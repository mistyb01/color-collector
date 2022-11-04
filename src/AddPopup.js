import React from 'react';
import './App.css';
function AddPopup({handlePaletteAdd, setPaletteName, colorList, setColorList}) {

  function handlePaletteName(e) {
    // console.log(e.target.value);
    setPaletteName(e.target.value);
  }

  function handleColorList(e) {
    let colorArr = [...colorList];
    colorArr[e.target.id] = e.target.value;
    console.log(colorArr);
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
      </section>
    </>
  );
}

export default AddPopup;
