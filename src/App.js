import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [fruit, setFruit] = useState('');
  const [fruitsList, setFruitsList] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:5000/fruits')
      .then((response) => setFruitsList(response.data))
      .catch((error) => console.error('Error fetching fruits:', error));
  }, []);

  
  const addFruit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/fruits', { fruit })
      .then((response) => {
        setFruitsList(response.data.fruits);
        setFruit(''); // Clear the input field
      })
      .catch((error) => console.error('Error adding fruit:', error));
  };

  return (
    <div className="App">
      <h1>Fruit List</h1>
      <form onSubmit={addFruit}>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          placeholder="Add a fruit"
        />
        <button type="submit">Add Fruit</button>
      </form>

      <ul class="list">
        {fruitsList.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
