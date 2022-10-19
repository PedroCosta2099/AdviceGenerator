import {useEffect, useState} from 'react';
import axios from 'axios'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'
import './App.css';


function App() {

  const [advice,setAdvice] = useState([]);

  function handleChange() {
    
    axios.get(`	https://api.adviceslip.com/advice`)
      .then(res => {
          setAdvice(res.data.slip)
      });
  
  }

  useEffect(() =>{handleChange();},[]);

  return (
    <div className="App">
      <div className='advice'>
        <div className="advice_content">
          <h6>{advice.id}</h6>
          <p>“{advice.advice}”</p>
          <img className="divider" src={desktopDivider}></img>
        </div>
        
      </div>
      <button className="dice" onClick={handleChange}>

            <img src={dice}></img>
        </button>
    </div>
  );
}

export default App;
