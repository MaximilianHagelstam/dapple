import React from 'react';
import { Button, TextField, Grid, Box } from '@material-ui/core';

const Form = ({ onSubmit, onChange, loading }) => {
  return (
    <Box pt={2} pb={2}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <TextField
              required
              variant="standard"
              id="word"
              label="Word"
              name="word"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={6}>
            {loading ? (
              <Button disabled fullWidth variant="outlined" color="primary">
                Loading
              </Button>
            ) : (
              <Button
                fullWidth
                type="submit"
                variant="outlined"
                color="primary"
              >
                Search
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
