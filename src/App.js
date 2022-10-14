import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(true);
  }

  if (isActive === true) {
    let interval = setInterval(() => {
      if (count > 0){
        setCount(count - 1);
      }
    }, 1000);
    if (count === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
  }


  return (
    <div className="App">
      <button onClick={handleClick}>Time</button>
      <h1>{count}</h1>
      {count === 0 && 
        <h1>Done!</h1>
      }
    </div>
  );
}

export default App;
