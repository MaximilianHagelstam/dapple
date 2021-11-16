import React, { useState, useEffect } from 'react';
import rhymeService from './services/rhymeService';

const App = () => {
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    rhymeService.getAll('james').then((res) => setRhymes(res.data));
  }, []);

  return (
    <div>
      <h1>James</h1>
      {rhymes.map((rhyme) => (
        <p>{rhyme}</p>
      ))}
    </div>
  );
};

export default App;
