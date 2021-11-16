import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography, Card } from '@material-ui/core';
import { v1 as uuidv1 } from 'uuid';

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
            key={uuidv1()}
            className={classes.pos}
            gutterBottom
            variant="body1"
            component="h5"
          >
            {rhyme}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default RhymeCard;
