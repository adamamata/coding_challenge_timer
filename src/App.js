import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
          setCount((count) => count - 1);
      }, 1000)
    } else {
      clearInterval(interval);
    }
  }, [isActive])

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  }

  return (
    <div className="App">

        <label>Time:</label>
        {/* <input onChange={handleChange} name="input"/> */}
        <button onClick={handleClick}>Count Down</button>   

      <div className="count">
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
