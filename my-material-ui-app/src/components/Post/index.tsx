import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { PostProps } from '../../utils/interfaces';

import useStyles from './styles';

const Post: React.FC<PostProps> = ({
  id,
  title,
  description,
  image,
  href,
}: PostProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.card} key={id}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>

          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          Compartilhar
        </Button>

        <Button href={href} size="small" color="primary">
          Saber mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
