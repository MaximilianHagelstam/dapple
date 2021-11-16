import React, { useState, useEffect } from 'react';
import rhymeService from './services/rhymeService';
import Typography from '@mui/material/Typography';

const App = () => {
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    rhymeService.getAll('james').then((res) => setRhymes(res.data));
  }, []);

  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Rhymes
      </Typography>

      {rhymes.map((rhyme) => (
        <Typography variant="body1" component="div" gutterBottom>
          {rhyme}
        </Typography>
      ))}
    </>
  );
};

export default App;
