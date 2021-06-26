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
          color="red"
          title="Contemplative Reptile"
        />
        <CardContent className='cardContent3'>
          <Typography gutterBottom variant="h5" component="h2">
            Quality Education
          </Typography>
          <Typography>
           <p>
           Skills and knowledge are factors that contribute to the growth of a learner, 
           thus DORSHS understands that its role is to hone these capabilities. Such strength of learners requires to be assessed and improved to be 
           done efficiently and sustainably. The institution utilizes competence to aid students to draw and build upon what they know, how they think, 
           and what they can do.
           </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
