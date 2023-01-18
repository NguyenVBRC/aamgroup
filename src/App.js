import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [ shape, setShape ] = useState(false);
  const [ cube, setCube ] = useState("0");
  const [ triangle, setTriangle ] = useState("20rem");
  const [ circle, setCircle ] = useState("0");

  function handleMove(){
    setShape(prevShape => !prevShape);
    shape ? setCube("0") : setCube("20rem");
    shape ? setTriangle("20rem") : setTriangle("0");
    shape ? setCircle("0deg") : setCircle("360deg");
  }

  return (
    <div className='shape__container'>
      <div id='cube' onClick={e=> handleMove(e)} style={{top: cube}}>
        This is a cube.
      </div>
      <div id='triangle' onClick={e=> handleMove(e)} style={{top: triangle}}>
        <p>This is a triangle.</p>
      </div>
      <div id='circle' onClick={e=> handleMove(e)} style={{transform: `rotate(${circle})`}}>
        <p>This is a big,</p> 
        <p>green circle.</p>
      </div>
    </div>
  )
}

export default App;
