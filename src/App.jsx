import React ,{useState} from 'react'
import "./App.css"

function App(){
  const [a,set]=useState(0);
 function increase(){
  set(a+1)
 }
 function decrease(){
  set(a-1)
 }

  return(
    <div className="container">
      <h1>{a}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

