import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fifth from '../../../img/fifth.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={fifth}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alma Briones
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Principal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Principal III
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
