import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography, Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

const RhymeCard = ({ rhymes }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {rhymes.map((rhyme) => (
          <Typography
            className={classes.pos}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {rhyme}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default RhymeCard;
