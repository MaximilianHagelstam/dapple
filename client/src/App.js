import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import rhymeService from './services/rhymeService';
import Copyright from './Copyright';
import RhymeCard from './RhymeCard';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

export default function App() {
  const [word, setWord] = useState('');
  const [rhymes, setRhymes] = useState([]);

  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    rhymeService.getAll(word).then((res) => setRhymes(res.data));
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
        <br />

        <form onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                id="word"
                label="Word"
                name="word"
                autoComplete="etext"
                onChange={onChange}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Search
          </Button>
        </form>
      </div>

      <RhymeCard rhymes={rhymes} />

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
