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
          className="colorCard"
          title="Excellence"
        />
        <CardContent className="cardContent2">
          <Typography gutterBottom variant="h5" component="h2">
                Excellence
          </Typography>
          <Typography>
              <p>
                Excellence is a set of values and outcomes that students strive to achieve, yet in DORSHS, excellence is a goal for all. 
                The school sets aspirations for students, staff and parents that is envisioned to be fulfilled. Further, the school manifests 
                discipline, virtues and missions that sets us vessels for excellence to not an act, but a character.
              </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
