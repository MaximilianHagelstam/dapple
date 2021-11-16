import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';
import RhymeCard from './RhymeCard';
import Form from './Form';
import rhymeService from './services/rhymeService';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const App = () => {
  const [word, setWord] = useState('');
  const [rhymes, setRhymes] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const rhymes = await rhymeService.getAll(word);
    setRhymes(rhymes);

    setLoading(false);
  };

  const onChange = (e) => {
    setWord(e.target.value);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Dapple
        </Typography>

        <br />

        <Form onSubmit={onSubmit} onChange={onChange} loading={loading} />

        <RhymeCard rhymes={rhymes} />
      </div>

      <Copyright />
    </Container>
  );
};

export default App;
