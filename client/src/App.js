import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import rhymeService from './services/rhymeService';
import Copyright from './Copyright';
import RhymeCard from './RhymeCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const App = () => {
  const [word, setWord] = useState('');
  const [rhymes, setRhymes] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Dapple
        </Typography>

        <br />

        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant="standard"
                id="word"
                label="Word"
                name="word"
                onChange={onChange}
              />
            </Grid>
          </Grid>

          {loading ? (
            <Button disabled variant="contained" color="primary">
              Loading...
            </Button>
          ) : (
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          )}
        </form>
      </div>

      <RhymeCard rhymes={rhymes} />

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default App;
