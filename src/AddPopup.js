import React from 'react';
import './App.css';
import { ChromePicker } from 'react-color';
function AddPopup({handlePaletteAdd, setPaletteName, colorList, 
  setColorList, setAddWindow, currentColor, setCurrentColor,
paletteSize, setPaletteSize, inputs, setInputs}) {

  
  function handlePaletteName(e) {
    setPaletteName(e.target.value);
  }

  function handlePaletteSize(e) {
    setPaletteSize(e.target.value);
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

  function handleChange(color, event) {
    console.log(color);

    setCurrentColor(color.hex);
  }



  return (
    <>
      <section id="add-popup">
          <div className='delete-btn' onClick={handleWindowClose}>&#10005;</div>
          <h1>new palette!</h1>
          <div className="palette-and-picker">
            <form onSubmit={handlePaletteAdd}>

              <label>
                # of colors
                <input type="number" value={paletteSize} onChange={handlePaletteSize}/>
              </label>
              
              <label>
                palette name
                <input type="text" onChange={handlePaletteName}/>
              </label>
              
              <div className="palette-form">
                {inputs}
              </div>
              <input type="submit" value="submit"/>
            </form>

            {/* <div className="color-picker">
              <ChromePicker
                color={currentColor}
                onChange={handleChange}
                disableAlpha={true}
                />
            </div> */}
          </div>
      </section>
    </>
  );
}

export default AddPopup;
