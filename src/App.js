import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(100);

  function countDown(){
    const current = count;
    for (let i = 0; i < current; i++){
      setTimeout(() => {
        setCount(count - 1);
      }, 1000)
    }
  }

  // const handleChange = (e) => {
  //   e.preventDefualt();
  // }

  const handleSubmit = () => {
    countDown();
  }


  return (
    <div className="App">

        <label>Time:</label>
        {/* <input onChange={handleChange} name="input"/> */}
        <button onClick={handleSubmit}>Submit</button>   

      <div className="count">
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
