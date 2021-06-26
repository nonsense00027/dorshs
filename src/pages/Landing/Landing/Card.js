import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 190,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className='colorCard'
          title="Quality Education"
        />
        <CardContent className='cardContent'>
          <Typography gutterBottom variant="h5" component="h2">
            Quality Education
          </Typography>
          <Typography>
              <p>
                As the academic institution of DORSHS provides knowledge to students, the objective is to provide a pre-requisite for learning and 
                human development. With that, the school provides quality education to learnings through engaging in the health, social-emotional 
                skills, and academic capabilities of learners. The institution sees quality education as fundamental in building learners that would 
                develop sustainable societies and improve individual well-being, thus the school seeks to achieve.
              </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
