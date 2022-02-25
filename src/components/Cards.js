import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: "rgba(0,0,0,.9)",
    color: "whitesmoke"
  }, // a style rule
  label: {}, // a nested style rule
});

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lz4b4GOmhjjr26kH2Pg75BGBAzA7u0HbqFOhyOKUKgggpLjt6GJNNre5zp6imzT0j68&usqp=CAU"
          alt="green iguana"
        />
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="div">
           Team Member Name
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
