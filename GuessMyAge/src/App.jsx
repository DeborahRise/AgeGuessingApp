import axios from 'axios';
import './App.css'
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(null)

  const guessage = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((resp) => {
      setAge(resp.data.age)
      console.log('age', resp.data);
    });
  };

  return (
    <div className='App'>
      <input className='input-name' type='text'
      placeholder='Enter your name'
      onChange={(event) => {
        setName(event.target.value);
      }}>
      </input>
      <button className='input-name'  onClick={guessage}>Guess My Age</button>
      <h1>{name} should be {age} years old</h1>
      
    </div>
    
  );
}

export default App
