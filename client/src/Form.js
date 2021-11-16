import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const Form = ({ onSubmit, onChange, loading }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid item xs={6} md={8}>
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

      <Grid item xs={6} md={4}>
        {loading ? (
          <Button disabled variant="contained" color="primary">
            Loading...
          </Button>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        )}
      </Grid>
    </form>
  );
};

export default Form;
