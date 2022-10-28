import React from 'react';
import './App.css';
import Header from './Header.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';
import AddPopup from './AddPopup.js';



function App() {
  const [palettes, setPalettes] = useState([]);

  // get palettes from localStorage at initialization
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('palettes')));
  }, []);

  // update the stored value whenever palettes is changed!
  useEffect(() => {
    window.localStorage.setItem('palettes', palettes);
  }, [palettes])

  return (
    <>
    <Header/>
    <main>
      <AddPopup/>
    <Gallery/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
